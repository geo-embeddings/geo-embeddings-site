from __future__ import annotations

import re
import shutil
from pathlib import Path

import nbformat
from nbconvert import MarkdownExporter


ROOT = Path(__file__).resolve().parent.parent
TUTORIALS_DIR = ROOT / "tutorials"
GENERATED_CSS_PATH = TUTORIALS_DIR / "notebook-output.css"


def title_from_stem(stem: str) -> str:
    return stem.replace("_", " ").replace("-", " ").title()


def title_from_notebook(notebook: nbformat.NotebookNode, stem: str) -> str:
    for cell in notebook.cells:
        if cell.cell_type != "markdown":
            continue
        source = cell.source.strip()
        if source.startswith("# "):
            return source.splitlines()[0][2:].strip()
    return title_from_stem(stem)


def clean_generated_files() -> None:
    for path in TUTORIALS_DIR.glob("*.md"):
        if path.name != "index.md":
            path.unlink()
    for path in TUTORIALS_DIR.glob("*_files"):
        if path.is_dir():
            shutil.rmtree(path)
    if GENERATED_CSS_PATH.exists():
        GENERATED_CSS_PATH.unlink()
    GENERATED_CSS_PATH.write_text("/* Generated notebook output styles. */\n", encoding="utf-8")


def extract_style_blocks(markdown: str) -> tuple[str, list[str]]:
    style_blocks = re.findall(r"<style.*?</style>", markdown, flags=re.DOTALL)
    markdown = re.sub(r"<style.*?</style>", "", markdown, flags=re.DOTALL)
    return markdown, style_blocks


def strip_script_tags(markdown: str) -> str:
    return re.sub(r"<script.*?</script>", "", markdown, flags=re.DOTALL)


def append_generated_css(style_blocks: list[str]) -> None:
    if not style_blocks:
        return
    css_fragments = []
    for block in style_blocks:
        fragment = re.sub(r"^<style[^>]*>", "", block)
        fragment = re.sub(r"</style>$", "", fragment)
        fragment = fragment.strip()
        if fragment:
            css_fragments.append(fragment)
    if not css_fragments:
        return
    existing = GENERATED_CSS_PATH.read_text(encoding="utf-8") if GENERATED_CSS_PATH.exists() else ""
    parts = [existing.strip()] if existing.strip() else []
    parts.extend(css_fragments)
    GENERATED_CSS_PATH.write_text("\n\n".join(parts) + "\n", encoding="utf-8")


def render_notebook(notebook_path: Path) -> tuple[str, str]:
    notebook = nbformat.read(notebook_path, as_version=4)
    exporter = MarkdownExporter()
    body, resources = exporter.from_notebook_node(notebook)
    body, style_blocks = extract_style_blocks(body)
    body = strip_script_tags(body)
    append_generated_css(style_blocks)

    stem = notebook_path.stem
    title = title_from_notebook(notebook, stem)
    output_name = f"{stem}.md"
    output_path = TUTORIALS_DIR / output_name
    asset_dir = TUTORIALS_DIR / f"{stem}_files"
    markdown_asset_prefix = f"./{stem}_files/"

    if asset_dir.exists():
        shutil.rmtree(asset_dir)
    outputs = resources.get("outputs", {})
    if outputs:
        asset_dir.mkdir(parents=True, exist_ok=True)
        for name, data in outputs.items():
            (asset_dir / name).write_bytes(data)
            body = body.replace(f"({name})", f"({markdown_asset_prefix}{name})")

    frontmatter = [
        "---",
        f'title: "{title}"',
        f'description: "Rendered from tutorials/{notebook_path.name}"',
        "---",
        "",
    ]
    output_path.write_text("\n".join(frontmatter) + body, encoding="utf-8")
    return title, output_name


def build_index(entries: list[tuple[str, str]]) -> None:
    lines = [
        "---",
        'title: "Tutorials"',
        'description: "Notebook-based tutorials for Geo-Embeddings."',
        "---",
        "",
        "# Tutorials",
        "",
    ]
    for title, output_name in entries:
        lines.append(f"- [{title}](./{output_name})")
    lines.append("")
    (TUTORIALS_DIR / "index.md").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    TUTORIALS_DIR.mkdir(parents=True, exist_ok=True)
    clean_generated_files()
    notebooks = sorted(TUTORIALS_DIR.glob("*.ipynb"))
    entries = [render_notebook(path) for path in notebooks]
    build_index(entries)


if __name__ == "__main__":
    main()

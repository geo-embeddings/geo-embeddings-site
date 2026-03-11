const REPO = "zarr-developers/geozarr-spec";

export default {
  async load() {
    const response = await fetch(
      `https://api.github.com/repos/${REPO}/issues?state=all&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
      }
    );

    if (!response.ok) {
      console.warn(
        `GitHub API returned ${response.status}, falling back to empty data`
      );
      return { milestones: [] };
    }

    const issues = await response.json();

    // Group issues by milestone
    const milestoneMap = new Map();

    for (const issue of issues) {
      if (!issue.milestone || issue.pull_request) continue;

      const ms = issue.milestone;
      if (!milestoneMap.has(ms.number)) {
        milestoneMap.set(ms.number, {
          number: ms.number,
          title: ms.title,
          description: ms.description,
          dueOn: ms.due_on,
          issues: [],
        });
      }

      milestoneMap.get(ms.number).issues.push({
        number: issue.number,
        title: issue.title,
        state: issue.state,
        url: issue.html_url,
        labels: issue.labels.map((l) => ({
          name: l.name,
          color: l.color,
        })),
      });
    }

    // Sort milestones by number, issues by number within each
    const milestones = [...milestoneMap.values()]
      .sort((a, b) => a.number - b.number)
      .map((ms) => ({
        ...ms,
        issues: ms.issues.sort((a, b) => a.number - b.number),
      }));

    return { milestones };
  },
};

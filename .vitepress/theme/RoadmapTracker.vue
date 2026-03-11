<script setup>
defineProps({
  milestones: {
    type: Array,
    required: true,
  },
});

function progress(ms) {
  const closed = ms.issues.filter((i) => i.state === "closed").length;
  return { closed, total: ms.issues.length };
}

function progressPercent(ms) {
  const { closed, total } = progress(ms);
  return total === 0 ? 0 : Math.round((closed / total) * 100);
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function textColor(bgHex) {
  const r = parseInt(bgHex.slice(0, 2), 16);
  const g = parseInt(bgHex.slice(2, 4), 16);
  const b = parseInt(bgHex.slice(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 150 ? "#000" : "#fff";
}
</script>

<template>
  <div v-if="milestones.length === 0" class="empty">
    <p>Could not load issues from GitHub. View the <a href="https://github.com/orgs/zarr-developers/projects/12">project board</a> directly.</p>
  </div>

  <div v-for="ms in milestones" :key="ms.number" class="milestone">
    <div class="milestone-header">
      <h3>{{ ms.title }}</h3>
      <span v-if="ms.dueOn" class="due">{{ formatDate(ms.dueOn) }}</span>
    </div>

    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercent(ms) + '%' }"></div>
    </div>
    <p class="progress-text">{{ progress(ms).closed }} of {{ progress(ms).total }} completed</p>

    <ul class="issue-list">
      <li v-for="issue in ms.issues" :key="issue.number" :class="{ closed: issue.state === 'closed' }">
        <span class="issue-status">{{ issue.state === 'closed' ? '✓' : '○' }}</span>
        <a :href="issue.url" target="_blank" rel="noopener">{{ issue.title }}</a>
        <span
          v-for="label in issue.labels"
          :key="label.name"
          class="label"
          :style="{ backgroundColor: '#' + label.color, color: textColor(label.color) }"
        >{{ label.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.milestone {
  margin-bottom: 2rem;
}

.milestone-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}

.milestone-header h3 {
  margin: 0;
}

.due {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.progress-bar {
  height: 8px;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  margin-top: 0.5rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--vp-c-brand-1);
  border-radius: 4px;
  transition: width 0.3s;
}

.progress-text {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-top: 0.25rem;
}

.issue-list {
  list-style: none;
  padding: 0;
  margin-top: 0.75rem;
}

.issue-list li {
  padding: 0.35rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.issue-list li.closed a {
  text-decoration: line-through;
  color: var(--vp-c-text-3);
}

.issue-status {
  font-size: 0.85rem;
  flex-shrink: 0;
}

.issue-list a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.issue-list a:hover {
  color: var(--vp-c-brand-1);
}

.label {
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  font-weight: 500;
  white-space: nowrap;
}

.empty {
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}
</style>

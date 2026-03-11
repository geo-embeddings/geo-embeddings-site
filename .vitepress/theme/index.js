import DefaultTheme from "vitepress/theme";
import RoadmapTracker from "./RoadmapTracker.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("RoadmapTracker", RoadmapTracker);
  },
};

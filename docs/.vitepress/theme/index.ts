import DefaultTheme from "vitepress/theme";
import HomeDashboard from "./components/HomeDashboard.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("HomeDashboard", HomeDashboard);
  },
};

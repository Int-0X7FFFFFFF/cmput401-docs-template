import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Docs",
      icon: "laptop-code",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },
  ],
});

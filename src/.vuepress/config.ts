import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/cmput401-docs-template/", // TODO

  lang: "en-US",
  title: "Docs Demo",
  description: "A docs of Ar Animal Identification",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

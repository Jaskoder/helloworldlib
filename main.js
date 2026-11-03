import { configOptions, applyConfig } from "./config.js";
import { $id, toogleSidebar } from "./src/utils.js";

applyConfig(configOptions);

window.addEventListener("DOMContentLoaded", () =>  {
    $id("sidebar-toogler").addEventListener("click", toogleSidebar)
})

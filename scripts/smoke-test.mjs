import { access, readFile } from "node:fs/promises";

const requiredFiles = ["src/index.html", "src/styles.css", "scripts/build.mjs"];

for (const file of requiredFiles) {
  await access(file);
}

const html = await readFile("src/index.html", "utf8");

if (!html.includes("GitHub Actions")) {
  throw new Error("src/index.html should mention GitHub Actions");
}

if (!html.includes("styles.css")) {
  throw new Error("src/index.html should load styles.css");
}

console.log("Smoke test passed");

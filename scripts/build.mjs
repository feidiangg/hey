import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url);
const srcDir = new URL("src/", root);
const distDir = new URL("dist/", root);

await rm(distDir, { force: true, recursive: true });
await mkdir(distDir, { recursive: true });
await cp(srcDir, distDir, { recursive: true });

const buildInfo = {
  builtAt: new Date().toISOString(),
  commit: process.env.GITHUB_SHA ?? "local",
  workflowRun: process.env.GITHUB_RUN_ID ?? "local"
};

await writeFile(
  join(distDir.pathname, "build-info.json"),
  `${JSON.stringify(buildInfo, null, 2)}\n`
);

console.log(`Built static site into ${distDir.pathname}`);

#!/usr/bin/env bun
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repo = "KooshaPari/hwLedger";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outPath = resolve(root, "src/data/qa-snapshot.json");
const auth = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};

async function fetchPanel(file) {
  const res = await fetch(`https://api.github.com/repos/${repo}/contents/docs/reports/${file}?ref=main`, {
    headers: {
      Accept: "application/vnd.github.raw",
      "User-Agent": "hwledger-landing-snapshot",
      ...auth,
    },
  });

  if (!res.ok) {
    return {
      data: null,
      reason: `<code>docs/reports/${file}</code> not yet emitted by <code>${repo}</code>. Add the file to populate this panel.`,
    };
  }

  return {
    data: await res.json(),
    reason: null,
  };
}

const snapshot = {
  _comment:
    "Static fallback for /qa panels. Used when the GitHub API is rate-limited (429) or otherwise unreachable at build time. Each panel mirrors the shape ghReport<T>() returns: { data, reason }. Refresh with `bun run data:refresh` once the upstream files exist.",
  coverage: await fetchPanel("coverage.json"),
  lint: await fetchPanel("lint.json"),
  frTrace: await fetchPanel("fr-trace.json"),
};

await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, `${JSON.stringify(snapshot, null, 2)}\n`);
console.log(`[fetch-qa-snapshot] refreshed ${outPath}`);

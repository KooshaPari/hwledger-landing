# Known Issues

Resolved in this pass: `bun run build` failed under restricted network access when
GitHub fetches threw DNS errors during static route generation. The docs and preview
GitHub helpers now catch network errors and degrade to empty/fallback route data.

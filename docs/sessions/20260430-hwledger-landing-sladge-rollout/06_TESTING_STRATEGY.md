# Testing Strategy

Validation plan:

- Check the README badge with `rg`.
- Run `bun run build`.
- Check Git state before commit.

Result: the initial build exposed DNS failure handling gaps; after hardening, the
build passed in the restricted sandbox.

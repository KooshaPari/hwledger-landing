# Implementation Strategy

Keep the disclosure change narrow, then fix only validation-blocking behavior found
while proving it. The build already had degraded UI states for unavailable GitHub
content, so the implementation hardens the build-time fetch helpers to return their
existing degraded state on DNS/network errors instead of throwing.

Validate with the repo's existing Astro build script before committing.

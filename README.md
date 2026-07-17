# Shams.

A learning site — plain HTML, CSS, and JavaScript, no build step, no framework. It explains how frontend, backend, and APIs actually talk to each other, then proves it with a live demo.

**Live site:** https://toor-4.github.io/fast-waiters/
**Repo:** https://github.com/toor-4/fast-waiters

## Pages

- **Home** — how a request travels from client to API to server, with an animated diagram
- **Blogs** — "The Waiter's API," explaining REST through a restaurant analogy
- **API** — a live demo page: real `fetch()` and axios requests, a request log, and refetch on demand
- **Reference** — an HTTP field guide (verbs, status codes, request/response anatomy)

## Development

No build tooling, package manager, or test suite. Open the HTML files directly in a browser, or serve the directory with any static file server:

```
python3 -m http.server 8000
```

## Deployment

Every push to `master` deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` — the repo root is published as-is, no build step.

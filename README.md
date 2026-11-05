# Veracto — Consulting Website Case Study

An English public edition of the Veracto AI consulting website: three audience journeys, a shared visual system and a static, accessible implementation.

![Veracto desktop homepage](preview-1280.png)

**Product and delivery work by Tim Smykov, Veracto co-founder, using AI-assisted development.** The wider project includes other co-founders, advisors and experts; the people shown in the site retain their own roles and authorship.

## Explore

- [English portfolio preview](https://timsmykov.github.io/veracto-site-showcase/)
- [Original business website](https://veracto.ai/)
- [Product decisions](docs/case-study.md)
- [Verification](docs/verification.md)

The site helps companies, individual researchers and research teams understand where AI consulting may help and what a next conversation involves. It distinguishes evaluation, adoption support and training. It does not present a retired agent-platform concept as the current consulting practice.

## Implementation

Astro owns static routes and page composition; typed content modules own copy; shared CSS tokens and native browser code own presentation and bounded interaction. The public edition is English-only. Analytics is disabled, private source portraits/review masters are excluded, and the site contains no CRM or client records.

## Run locally

Verified toolchain: Node.js 26.9, npm 11+ and Python 3.

```sh
npm ci
npm run quality
npm run dev -- --host 127.0.0.1
```

`quality` checks Astro/TypeScript, lint, the static build, English output and local asset references. This edition omits the private/bilingual production deployment harness; browser verification is recorded separately.

## Scope of the case

The evidence is the delivered interface, source structure and checked behavior. Commercial demand, conversion improvement, revenue and client impact are not inferred from publishing a website. This public edition does not deploy changes to the original business website.

See [NOTICE](NOTICE.md) for authorship, project assets and dependencies.

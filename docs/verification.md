# Verification — 5 November 2026

- 296 selected original files match the source-snapshot manifest, including both Russian and English locales.
- Astro/TypeScript diagnostics, ESLint and static production build pass.
- Twenty-eight main pages/redirects and their referenced local assets pass static verification with English/Russian language expectations.
- Public preview packaging rewrites deployment paths and disables analytics controls in generated HTML; original application source remains unchanged.
- Browser checks cover both locales and the language switch at phone/desktop widths before final acceptance.

The public build lockfile includes compatible dependency fixes from the initial preparation. Moderate development-tool advisories remain; no complete security audit is claimed. Original private source and production services are independent of this preview.

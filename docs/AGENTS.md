# Documentation Agent Instructions

## Package Identity
- Mintlify documentation source for x402-tron
- MDX/Markdown files with `docs.json` as navigation configuration

## Directory Structure
- `core-concepts/` — Protocol explanations (HTTP 402, client-server, facilitator, wallet, network support)
- `getting-started/` — Quickstart guides for buyers and sellers (MDX files with tabs)
- `introduction.md` — Welcome/landing page
- `faq.md` — Frequently asked questions
- `docs.json` — Mintlify navigation and configuration
- `sdk-features.md` - Feature list of Python and TypeScript SDKs

## Code-to-Doc Mapping
- Changes to `typescript/packages/` affect TypeScript SDK references
- Changes to `python/x402/` affect Python SDK references
- Changes to facilitator endpoints affect quickstart guides
- Changes to mechanisms affect core-concepts docs

## Style Guidelines
- Use Python for primary code examples (it's the most complete SDK)
- Include TypeScript examples where available
- Include error handling in all API examples
- Write for developers with 2-5 years experience
- Use MDX components (`<Tabs>`, `<Tab>`) for multi-language code examples
- Show both success and error response examples for API endpoints
- Use real-world parameter values in examples (not foo/bar placeholders)

## Conventions
- DO: Add new pages to `docs.json` navigation
- DO: Include code examples from real SDK files
- DO: Use `<Tabs>` for multi-language code examples
- DO: Add frontmatter (title, description) to all pages
- DON'T: Add pages without updating `docs.json`
- **Git: Create PRs for review; NEVER commit directly to main**

## TRON-Specific Content
- Network identifiers use format `tron:<network>` (mainnet, nile, shasta)
- Use TIP-712 (not EIP-712) for TRON signing references
- Token addresses are base58-encoded (start with 'T')
- Reference TronGrid endpoints for node access
- Example token: USDT at `TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf` (Nile)

## Touch Points / Key Files
- `introduction.md` — Landing page
- `faq.md` — Frequently asked questions
- `docs.json` — Navigation and configuration (MUST update when adding pages)
- `core-concepts/*.md` — Conceptual documentation
- `getting-started/*.mdx` — Quickstart guides (MDX for tab components)
- `sdk-features.md` — Update when SDK capabilities change

## File Extensions
- Use `.md` for standard markdown pages
- Use `.mdx` for pages with React components (Tabs, etc.)

## Common Gotchas
- `docs.json` controls Mintlify navigation; pages not listed won't appear
- Links between pages should omit file extensions
- TRON addresses are case-sensitive and base58-encoded

## Pre-PR Checks
- All links work (no broken references)
- New pages added to `docs.json` navigation
- Code examples compile and run
- Frontmatter present on all pages (title, description)
- MDX syntax is valid

## SDK Feature Parity Document

When SDK code changes involve:
- New mechanisms in `*/mechanisms/`
- New signers in `*/signers/`
- New client/server features

Update `sdk-features.md` to reflect the current state. Check both SDKs (python/, typescript/) when updating.

# navidemad.github.io

Personal site, served as-is by GitHub Pages from `main`. No build step, no dependencies.

## Run it

```sh
bin/serve        # http://127.0.0.1:4173
bin/check        # static checks
bin/check-browser # desktop and phone checks (requires agent-browser and Chrome)
```

## Where things live

| File | What |
| --- | --- |
| `index.html` | Markup and the English copy (source of truth, readable without JS) |
| `site.js` | French copy (`FR`), language switch, localized snapshot dates and numbers |
| `site.css` | Styles: one dark theme, tokens at the top; every animation rests in its final state |
| `photo.jpg`, `avatar.jpg` | Hero portrait (460 px) and header avatar (128 px), both self-hosted |
| `logos/` | Project logos used on the open-source cards (brand icons are inlined as SVG symbols in `index.html`) |
| `tools/og-image.html` | Source of `og-image.png`; re-render with `bin/og` |

## Editing copy

1. Change the English text in `index.html`.
2. Change the string with the same `data-i18n` key in `FR` (`site.js`).
3. `bin/check` fails if a key exists on one side only, or if a snapshot number
   placeholder (`data-stat`, `data-count`) is lost in translation.

French is shown when the browser language is French, when `?lang=fr` is in the URL,
or after the visitor picks FR (remembered in `localStorage`).

## GitHub snapshot

The open-source section ships as dated HTML. Visitors can read it without JavaScript or contacting GitHub. Language changes update the URL, dates, and number formatting.

Run `bin/refresh-snapshot` with an authenticated GitHub CLI to update the page. It reads the public search linked from “Verify on GitHub,” counts the repositories, and groups the log by repository: the four most-starred repositories, each with its three latest merged PRs at most. It writes the file only after retrieving a complete snapshot. The weekly GitHub Action proposes the update in a PR for review. Merging that PR publishes it through the existing Pages setup.

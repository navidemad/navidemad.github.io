# navidemad.github.io

Personal site, served as-is by GitHub Pages from `main`. No build step, no dependencies.

## Run it

```sh
bin/serve        # http://127.0.0.1:4173
bin/check        # the gate: run before every push (CI runs it too)
```

## Where things live

| File | What |
| --- | --- |
| `index.html` | Markup and the English copy (source of truth, readable without JS) |
| `site.js` | French copy (`FR`), language switch, live GitHub numbers |
| `site.css` | Styles; light and dark follow the system setting |
| `tools/og-image.html` | Source of `og-image.png`; re-render with `bin/og` |

## Editing copy

1. Change the English text in `index.html`.
2. Change the string with the same `data-i18n` key in `FR` (`site.js`).
3. `bin/check` fails if a key exists on one side only, or if a live number
   placeholder (`data-years`, `data-stat`, `data-count`) is lost in translation.

French is shown when the browser language is French, when `?lang=fr` is in the URL,
or after the visitor picks FR (remembered in `localStorage`).

## Live numbers

The hero log and every merged-PR figure come from one GitHub search, defined once
as `QUERY` in `site.js`. It counts third-party work only: my own repositories,
my employer's and the Pixel-CLI org are excluded. The figures in the markup are a
dated snapshot shown when the GitHub API is unreachable or rate-limited; the
"Verify on GitHub" link must run the same search (`bin/check` enforces it).

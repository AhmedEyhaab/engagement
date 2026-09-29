# Waiting for our Engagement! 💍

A single-page countdown site for an engagement, with:

- A live countdown to the engagement date/time
- A **Yes** button that reveals a save-the-date invitation card with a little heart animation
- A **No** button that runs away from your cursor/finger and can't be pressed

No build step, no dependencies (only Google Fonts are loaded from the web).

## Files

| File | Purpose |
| --- | --- |
| `config.js` | **The only file you need to edit** — names, date, time, venue, wording, colours |
| `index.html` | The page (reads everything from `config.js`) |
| `assets/qrcode.js` | Bundled QR generator ([qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator), MIT) |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Customizing (`config.js`)

```js
groom: 'Muhanad',
bride: 'Nouran',
event: { date: '2026-10-14', time: '19:00', timeZone: 'Africa/Cairo' },
venue: { location: 'Egypt View, Mokkatam', hall: 'Latoya' },
```

Change the values, save, refresh. That updates the countdown, the page title, and the invitation card (names, date, time, venue).

- **Date / time** — `date` is `YYYY-MM-DD`, `time` is 24-hour `HH:mm`.
- **`timeZone`** — the venue's IANA zone (e.g. `Africa/Cairo`, `Europe/Berlin`). Daylight saving is handled automatically and all guests see the same countdown. Use `''` to use each visitor's local time.
- **Location QR code** — the invitation card shows a QR that opens Google Maps, plus an "Open in Google Maps" link under the card. For an exact pin, paste a Google Maps share link into `venue.mapsUrl` (Maps → Share → Copy link); if left empty it searches Maps for `venue.location`. Turn the QR off with `qr: { show: false }`. (The QR only appears on the generated card, not on a custom picture; the link always shows.)
- **Wording** — everything under `text` (heading, buttons, captions, labels).
- **Colours** — optional overrides under `theme` (e.g. `rose: '#d97e89'`).
- **Your own invitation picture** — put it in an `assets/` folder and set `invitation: { image: 'assets/invitation.jpg' }`. A picture won't update when you change the config, so the generated card is the default.
- **"No" button sensitivity** — `dodgeDistance` (pixels for mouse / touch).

## Run locally

Just open `index.html` in a browser (double-click works).

## Deploy to GitHub Pages

1. Create a new **Public** repo named `groom-bride-engagement` and push these files:
   ```
   git init
   git add .
   git commit -m "Engagement countdown site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/groom-bride-engagement.git
   git push -u origin main
   ```
2. **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main**, folder **/(root)** → Save.
3. After ~1 minute the site is live at `https://<your-username>.github.io/groom-bride-engagement/`.

To update later, edit `config.js` (you can do it right in the GitHub web UI with the pencil icon) and commit; Pages redeploys automatically.

## Deploy to Netlify (drag & drop)

Drag the whole folder onto <https://app.netlify.com/drop>. If your network blocks `*.netlify.app`, GitHub Pages is a good fallback.

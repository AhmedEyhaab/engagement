/*
 * ============================================================
 *  EDIT THIS FILE ONLY — everything on the site is driven by it
 * ============================================================
 * Change the names / date / venue below, save, refresh the page. Done.
 */
window.SITE_CONFIG = {

  // ---------- Who ----------
  groom: 'Muhanad',
  bride: 'Nouran',

  // ---------- When ----------
  event: {
    date: '2026-10-14',        // YYYY-MM-DD
    time: '19:00',             // 24-hour HH:mm  (19:00 = 7:00 pm)
    // IANA time zone of the venue. The countdown is calculated for this zone
    // (daylight saving handled automatically), so every guest sees the same
    // countdown wherever they are. Use '' to use each visitor's own local time.
    timeZone: 'Africa/Cairo'
  },

  // ---------- Where (shown on the invitation card) ----------
  venue: {
    location: 'Compound Bienstar, Mokkatam',
    hall: 'Tower N - Roof'               // set to '' to hide the hall line
  },

  // ---------- QR code on the invitation card ----------
  qr: { show: true },

  // ---------- Wording ----------
  text: {
    pageTitle: 'Waiting for our Engagement! 💍',
    heading: ['Waiting for', 'our Engagement!'],   // one entry per line
    joinText: 'Join us! ❤️',
    yesButton: 'Yes ♥',
    noButton: 'No 🙈',
    inviteCaption: "You said yes! Here's the invitation",
    inviteTagline: 'For the engagement of',
    saveTheDate: 'save the date',
    and: 'and',
    locationLabel: 'Location',
    hallLabel: 'Hall',
    scanLabel: 'Scan for location',
    openMaps: '📍 Open in Google Maps'   // link shown under the card
  },

  // ---------- Invitation card ----------
  // By default the card is generated from the values above.
  // To show your own picture instead, drop it in an "assets" folder and set e.g.
  //   image: 'assets/invitation.jpg'
  // (note: a picture will NOT update when you change names/date here)
  invitation: {
    image: null
  },

  // ---------- Runaway "No" button: how close (px) the cursor/finger can get ----------
  dodgeDistance: { mouse: 95, touch: 85 },

  // ---------- Optional colour overrides (any CSS colour) ----------
  // keys: bg, card-bg, border, border-soft, text-dark, text-mid,
  //       rose, rose-dark, beige-btn, beige-btn-text
  theme: {
    // rose: '#d97e89'
  }
};

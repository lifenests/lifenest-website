# LifeNest website — planned URLs (lifenests.com)

Notes for pages to publish before / while completing **Google Play** listing, **Data safety**, and user trust.  
App: **LifeNest** · Package: `com.lifenest.app` · Developer contact: **developer@lifenests.com**

When the site goes live, use these paths (or redirects) and paste the **full HTTPS URLs** into Play Console.

---

## Required for Google Play (priority)

| URL | Purpose | Play Console where it goes |
|-----|---------|----------------------------|
| https://lifenests.com/privacy | Privacy policy | Store listing · App content · Privacy policy |
| https://lifenests.com/delete-account | Account & data deletion instructions | Data safety → Delete account URL |

---

## Strongly recommended (same launch)

| URL | Purpose |
|-----|---------|
| https://lifenests.com/ | Marketing / app landing (optional but useful) |
| https://lifenests.com/terms | Terms of service / Terms of use |
| https://lifenests.com/support | Help, FAQ, contact (can be `mailto:` link on page) |
| https://lifenests.com/contact | Contact form or email for support |

---

## Optional (later)

| URL | Purpose |
|-----|---------|
| https://lifenests.com/data-safety | Human-readable summary aligned with Play Data safety (optional; policy is the legal source) |
| https://lifenests.com/children | If you ever target kids / Families policy |
| https://lifenests.com/open-source | Third-party licenses (if you want a public page) |

---

## Content checklist per page

### `/privacy` (Privacy policy)

Should cover at minimum:

- **Who we are** — LifeNests / LifeNest app
- **Data collected** — name, email, password (hashed), mood, journal, goals, habits, reminders, favorites, theme/preferences, usage tied to account
- **How data is used** — app functionality, sync across devices, support
- **Where data is stored** — your backend (e.g. `dev-api.lifenests.com` / production API host), hosting provider
- **Encryption in transit** — HTTPS for production app traffic
- **Third parties** — list any analytics, crash reporting, payment, or CDN when added (none required in current app beyond your API/media hosting)
- **Retention** — how long you keep data after account deletion
- **User rights** — access, correction, deletion; link to `/delete-account`
- **Contact** — developer@lifenests.com
- **Last updated** date

### `/delete-account` (Account deletion)

Google requires this page to:

- Refer to **LifeNest** / **LifeNests** (as on the store listing)
- **Prominently** explain steps to request deletion
- Specify **what is deleted** vs **kept**, and any **retention period**

Suggested flow (until in-app delete exists):

1. Email **developer@lifenests.com** from the **same email** used in the LifeNest account.
2. Subject: `Delete my LifeNest account`
3. Include: registered email and optional reason.
4. We delete within **X business days** (pick a number, e.g. 30).

**Deleted (intended):** account profile (name, email), mood entries, journal entries, goals, habits, reminders, favorites, wellness questionnaire answers, and other user-generated content tied to the account.

**May be retained briefly:** server logs, backups, and legal/fraud records only as needed and only for the period stated in the privacy policy.

Link back to: https://lifenests.com/privacy

### `/terms`

- License to use the app, acceptable use, disclaimers (wellness app not medical advice), limitation of liability, governing law (pick jurisdiction when ready).

### `/support` or `/contact`

- Support email: developer@lifenests.com
- Link to privacy and delete-account pages

---

## Data safety form (Play Console) — align with site

When filling **Data safety** (already in progress):

| Question | Answer (current app) |
|----------|----------------------|
| Collect or share required data types? | **Yes** |
| Encrypted in transit? | **Yes** (production HTTPS) |
| Account creation | **Username and password** only (email + password) |
| Delete account URL | **https://lifenests.com/delete-account** (after page is live) |
| Delete data without deleting account? | **No** (unless you add that feature later) |

---

## Store listing copy (reference)

Listing text lives in repo: `LifeStyle/store-assets/google-play/listing-en-US.json`

---

## Implementation notes (when building the site)

- All public legal URLs must be **HTTPS** with valid certificates.
- Use the **same domain** on Play Console as on the live pages (avoid `www` vs apex mismatch — pick one and redirect the other).
- After pages are live, update Play Console and re-submit Data safety if needed.
- Keep this file updated with **actual publish dates** and any URL path changes.

---

## Quick copy-paste list (paths only)

```
https://lifenests.com/
https://lifenests.com/privacy
https://lifenests.com/delete-account
https://lifenests.com/terms
https://lifenests.com/support
https://lifenests.com/contact
```

Optional later:

```
https://lifenests.com/data-safety
https://lifenests.com/children
https://lifenests.com/open-source
```

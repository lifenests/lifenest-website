export const SITE = {
  name: "LifeNest",
  company: "LifeNests",
  tagline: "Mindfulness, sleep, habits & calm — your daily wellness nest in one app.",
  supportEmail: "developer@lifenests.com",
  packageName: "com.lifenest.app",
  lastUpdated: "October 25, 2026",
  deletionDays: 30,
  copyrightYear: 2026,
} as const;

export const NAV_LINKS = [
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/delete-account", label: "Delete account" },
  { href: "/terms", label: "Terms of service" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
  { href: "/data-safety", label: "Data safety" },
] as const;

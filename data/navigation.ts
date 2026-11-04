export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Doctor", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerPatientResources: NavLink[] = [
  { label: "Book Appointment", href: "/book" },
  { label: "Patient FAQ", href: "/faq" },
  { label: "Health Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

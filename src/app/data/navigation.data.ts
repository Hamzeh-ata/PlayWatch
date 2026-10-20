import { brand } from '../config/brand';
import { NavLink } from '../models/nav-link.model';

export const navLinks: NavLink[] = [
  { href: '#home', labelKey: 'nav.home' },
  { href: '#solutions', labelKey: 'nav.solutions' },
  { href: '#how-it-works', labelKey: 'nav.howItWorks' },
  { href: '#about', labelKey: 'nav.about' },
  { href: '#contact', labelKey: 'nav.contact' },
];

export const footerIndustryLinks: NavLink[] = [
  { href: '#billiards', labelKey: 'industries.billiards.name' },
  { href: '#paintball', labelKey: 'industries.paintball.name' },
  { href: '#trampoline', labelKey: 'industries.trampoline.name' },
];

export const trialHref = brand.phoneTel;
export const solutionsHref = '#solutions';

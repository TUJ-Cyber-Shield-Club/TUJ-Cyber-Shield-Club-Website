import type { ImageMetadata } from 'astro';

// ─────────────────────────────────────────────────────────────────────────────
// EDIT ME: the club team shown on the "Meet the team" page.
//
// To update a member:
//   1. Drop a real square photo into  src/assets/team/  (e.g. ruoan-li.jpg).
//   2. Import it below and set it as that member's `avatar`.
//   3. Replace "Insert bio here" with a real bio. Add or remove members freely.
// The order here is the order they appear on the page.
// Current avatars are placeholder initials. Swap in real photos when ready.
// ─────────────────────────────────────────────────────────────────────────────

import carlMasters from '../assets/team/carl-masters.png';
import ruoanLi from '../assets/team/ruoan-li.png';
import uchidaTerence from '../assets/team/uchida-terence.png';

// A circular icon button under a member's bio. `type` picks the brand logo
// (see the ICONS map in src/components/SocialIcons.astro for supported types:
// email, github, linkedin, instagram, x, website). For email, use a
// mailto: href, e.g. "mailto:you@example.com".
export interface SocialLink {
  type: 'email' | 'github' | 'linkedin' | 'instagram' | 'x' | 'website';
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: ImageMetadata;
  links?: SocialLink[];
}

export const team: TeamMember[] = [
  {
    name: 'Carl Masters',
    role: 'Club President',
    bio: "Hello! I'm Carl Masters, a second-year cybersecurity major at TUJ and founder of the Cyber Shield club. I'm passionate about digital security, the responsible development of AI, and hackathons and tech events across Tokyo. Feel free to connect with me via email or LinkedIn, or check out my portfolio below!",
    avatar: carlMasters,
    links: [
      { type: 'email', href: 'mailto:carl.masters.professional@protonmail.com' },
      { type: 'linkedin', href: 'https://www.linkedin.com/in/carl-masters-724951297/' },
      { type: 'github', href: 'https://github.com/carlmasters02' },
      { type: 'website', href: 'https://carlmasters.com' },
    ],
  },
  {
    name: 'Ruoan Li',
    role: 'Vice President',
    bio: "I'm Ruoan, a second-year Computer Science major. I'm passionate about coding and understanding how secure systems work. Always down to chat about CS projects or collaborate on tech challenges!",
    avatar: ruoanLi,
    links: [
      { type: 'email', href: 'mailto:ruoanli.an@gmail.com' },
      { type: 'linkedin', href: 'https://www.linkedin.com/in/ruoan-li' },
      { type: 'github', href: 'https://github.com/RuoanLi' },
    ],
  },
  {
    name: 'Uchida Terence',
    role: 'Member',
    bio: 'Insert bio here',
    avatar: uchidaTerence,
  },
];

// App configuration constants

export const APP_CONFIG = {
  name: 'Yahvi Aura Events',
  description: 'Premium Event Management & Planning Services',
  url: 'https://yahviaura.com',
  email: 'contact@yahviaura.com',
  phone: '+1234567890',
} as const;

export const SOCIAL_LINKS = {
  facebook: '',
  instagram: '',
  twitter: '',
  linkedin: '',
  youtube: '',
} as const;

export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  portfolio: '/portfolio',
  gallery: '/gallery',
  contact: '/contact',
  blog: '/blog',
} as const;

export const EVENT_CATEGORIES = {
  corporate: 'Corporate Events',
  experiential: 'Experiential Events',
  weddings: 'Weddings',
  social: 'Social Events',
} as const;

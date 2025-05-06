import { NavLinkProps, ServiceProps } from '../types';

export const navLinks: NavLinkProps[] = [
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'responsibility', label: 'Our Responsibility', href: '#responsibility' },
  { id: 'contact', label: 'Contact Us', href: '#contact' },
];

export const services: ServiceProps[] = [
  {
    id: 'data-cleaning',
    title: 'Good Data Cleaning',
    description: 'We sincerely clean halal good data for righteous Ummah and good humanity relevance. This includes cleaning for each good islamically strong-willed, proactive words, videos, and halal images.',
    imageSrc: 'https://i.ibb.co/0ypjYh24/data.jpg',
    imageAlt: 'Data cleaning visualization'
  },
  {
    id: 'web-seo',
    title: 'Website and SEO',
    description: 'We offer premium, exclusive and standard websites & SEO for sincere organizations. With clientelle base ranging from Conglomerates, companies, governmental organisations, non-governmental associations, Halal Micro, small, medium entrepreneurs, and civil organisations.',
    imageSrc: 'https://i.ibb.co/tTj69ZpJ/seo.jpg',
    imageAlt: 'Website and SEO services'
  },
  {
    id: 'media-visibility',
    title: 'Islamic Authentic Halal Media Visibility',
    description: 'We provide good image and visibility to halal organisations who are relevant to righteous Ummah and good humanity. With good presentation in Islamic authentic halal media preferably.',
    imageSrc: 'https://i.ibb.co/Q319X3F7/halal-media-visibility.jpg',
    imageAlt: 'Islamic media visibility'
  },
  {
    id: 'capacity-building',
    title: 'Halal Enlightenment Capacity Building',
    description: 'Our enlightenment capacity building is to uplift, and support 1Ummah volunteers, Islamic students, with the right halal skills to thrive in their peaceful communities and at least earn reasonable halal income. We also facilitate the provision of Islamic scholarships to deserving students in Islamic studies.',
    imageSrc: 'https://i.ibb.co/RpvWj8X5/hala-engagement-capacity.jpg',
    imageAlt: 'Halal engagement capacity building'
  },
];
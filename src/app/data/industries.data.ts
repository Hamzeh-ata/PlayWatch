import { Industry } from '../models/industry.model';

export const featuredIndustry: Industry = {
  id: 'billiards',
  featured: true,
  nameKey: 'industries.billiards.name',
  descriptionKey: 'industries.billiards.description',
  imageSrc: '/images/billiards-hall.jpg',
  imageAltKey: 'industries.billiards.imageAlt',
  badgeKey: 'industries.billiards.badge',
  workflowKeys: [
    'industries.billiards.workflow1',
    'industries.billiards.workflow2',
    'industries.billiards.workflow3',
    'industries.billiards.workflow4',
    'industries.billiards.workflow5',
  ],
  ctaTarget: '#trial',
};

export const supportingIndustries: Industry[] = [
  {
    id: 'paintball',
    featured: false,
    nameKey: 'industries.paintball.name',
    descriptionKey: 'industries.paintball.description',
    imageSrc: '/images/paintball.jpg',
    imageAltKey: 'industries.paintball.imageAlt',
    badgeKey: 'industries.paintball.badge',
    workflowKeys: [
      'industries.paintball.workflow1',
      'industries.paintball.workflow2',
      'industries.paintball.workflow3',
      'industries.paintball.workflow4',
    ],
    ctaTarget: '#trial',
  },
  {
    id: 'trampoline',
    featured: false,
    nameKey: 'industries.trampoline.name',
    descriptionKey: 'industries.trampoline.description',
    imageSrc: '/images/trampoline.jpg',
    imageAltKey: 'industries.trampoline.imageAlt',
    badgeKey: 'industries.trampoline.badge',
    workflowKeys: [
      'industries.trampoline.workflow1',
      'industries.trampoline.workflow2',
      'industries.trampoline.workflow3',
      'industries.trampoline.workflow4',
    ],
    ctaTarget: '#trial',
  },
];

import { FeatureGroup } from '../models/feature-group.model';

export const featureGroups: FeatureGroup[] = [
  {
    id: 'sessions',
    icon: 'sessions',
    titleKey: 'offers.sessions.title',
    bodyKey: 'offers.sessions.body',
    itemKeys: [
      'offers.sessions.item1',
      'offers.sessions.item2',
      'offers.sessions.item3',
      'offers.sessions.item4',
    ],
    previewKind: 'sessions',
  },
  {
    id: 'reservations',
    icon: 'calendar',
    titleKey: 'offers.reservations.title',
    bodyKey: 'offers.reservations.body',
    itemKeys: [
      'offers.reservations.item1',
      'offers.reservations.item2',
      'offers.reservations.item3',
    ],
    previewKind: 'reservations',
  },
  {
    id: 'operations',
    icon: 'workflow',
    titleKey: 'offers.operations.title',
    bodyKey: 'offers.operations.body',
    itemKeys: [
      'offers.operations.item1',
      'offers.operations.item2',
      'offers.operations.item3',
    ],
    previewKind: 'operations',
  },
  {
    id: 'reports',
    icon: 'chart',
    titleKey: 'offers.reports.title',
    bodyKey: 'offers.reports.body',
    itemKeys: [
      'offers.reports.item1',
      'offers.reports.item2',
      'offers.reports.item3',
    ],
    previewKind: 'reports',
  },
];

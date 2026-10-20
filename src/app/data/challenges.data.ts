import { Challenge } from '../models/challenge.model';

export const challenges: Challenge[] = [
  {
    icon: 'clock',
    titleKey: 'challenges.items.sessions.title',
    bodyKey: 'challenges.items.sessions.body',
    helpKey: 'challenges.items.sessions.help',
  },
  {
    icon: 'table',
    titleKey: 'challenges.items.availability.title',
    bodyKey: 'challenges.items.availability.body',
    helpKey: 'challenges.items.availability.help',
  },
  {
    icon: 'users',
    titleKey: 'challenges.items.groups.title',
    bodyKey: 'challenges.items.groups.body',
    helpKey: 'challenges.items.groups.help',
  },
  {
    icon: 'clipboard',
    titleKey: 'challenges.items.records.title',
    bodyKey: 'challenges.items.records.body',
    helpKey: 'challenges.items.records.help',
  },
  {
    icon: 'chart',
    titleKey: 'challenges.items.visibility.title',
    bodyKey: 'challenges.items.visibility.body',
    helpKey: 'challenges.items.visibility.help',
  },
];

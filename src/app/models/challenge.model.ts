import { IconName } from './icon-name.model';

export interface Challenge {
  icon: IconName;
  titleKey: string;
  bodyKey: string;
  helpKey: string;
}

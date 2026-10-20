import { IconName } from './icon-name.model';
import { PreviewKind } from './preview-kind.model';

export interface FeatureGroup {
  id: string;
  icon: IconName;
  titleKey: string;
  bodyKey: string;
  itemKeys: string[];
  previewKind: PreviewKind;
}

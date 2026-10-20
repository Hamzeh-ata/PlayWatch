import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FeatureGroup as FeatureGroupModel } from '../../models/feature-group.model';
import { Icon } from '../icon/icon';
import { ProductPreview } from '../product-preview/product-preview';

@Component({
  selector: 'app-feature-group',
  imports: [TranslatePipe, Icon, ProductPreview],
  templateUrl: './feature-group.html',
})
export class FeatureGroup {
  readonly group = input.required<FeatureGroupModel>();
  readonly emphasized = input(false);
}

import { Component, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Industry } from '../../models/industry.model';
import { CtaButton } from '../cta-button/cta-button';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-industry-card',
  imports: [TranslatePipe, CtaButton, Icon],
  templateUrl: './industry-card.html',
})
export class IndustryCard {
  readonly industry = input.required<Industry>();
  readonly imageFailed = signal(false);

  onImageError(): void {
    this.imageFailed.set(true);
  }
}

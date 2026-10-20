import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CtaVariant } from '../../models/cta-variant.model';

@Component({
  selector: 'app-cta-button',
  imports: [TranslatePipe],
  templateUrl: './cta-button.html',
})
export class CtaButton {
  readonly labelKey = input.required<string>();
  readonly href = input.required<string>();
  readonly variant = input<CtaVariant>('primary');
  readonly ctaId = input('cta');
  readonly fullWidth = input(false);
}

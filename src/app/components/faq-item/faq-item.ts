import { Component, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FaqItem as FaqModel } from '../../models/faq-item.model';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-faq-item',
  imports: [TranslatePipe, Icon],
  templateUrl: './faq-item.html',
})
export class FaqItem {
  readonly item = input.required<FaqModel>();
  readonly open = input(false);
  readonly toggled = output<string>();

  onToggle(): void {
    this.toggled.emit(this.item().id);
  }
}

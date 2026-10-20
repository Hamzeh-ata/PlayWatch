import { Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { brand } from '../../config/brand';
import { navLinks } from '../../data/navigation.data';
import { LanguageService } from '../../services/language.service';
import { CtaButton } from '../cta-button/cta-button';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-site-nav',
  imports: [TranslatePipe, CtaButton, Icon],
  templateUrl: './site-nav.html',
})
export class SiteNav {
  private readonly language = inject(LanguageService);
  readonly brand = brand;
  readonly links = navLinks;
  readonly currentLang = this.language.currentLang;
  readonly menuOpen = signal(false);
  readonly menuLabelKey = computed(() => (this.menuOpen() ? 'nav.closeMenu' : 'nav.openMenu'));

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  setEnglish(): void {
    this.language.setLanguage('en');
  }

  setArabic(): void {
    this.language.setLanguage('ar');
  }
}

import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { brand } from '../config/brand';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  readonly currentLang = signal('en');

  init(): void {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setFallbackLang('en');
    this.apply(this.readStoredLanguage());
  }

  setLanguage(lang: string): void {
    if (lang !== 'en' && lang !== 'ar') {
      return;
    }
    this.apply(lang);
    localStorage.setItem(brand.languageStorageKey, lang);
  }

  private readStoredLanguage(): string {
    const stored = localStorage.getItem(brand.languageStorageKey);
    if (stored === 'ar' || stored === 'en') {
      return stored;
    }
    return 'en';
  }

  private apply(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}

import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { brand } from '../config/brand';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly translate = inject(TranslateService);

  init(): void {
    this.apply();
    this.translate.onLangChange.subscribe(() => this.apply());
  }

  private apply(): void {
    this.translate.get(['meta.title', 'meta.description']).subscribe((values) => {
      const pageTitle = values['meta.title'];
      const description = values['meta.description'];
      this.title.setTitle(pageTitle);
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:title', content: pageTitle });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:site_name', content: brand.name });
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
      this.meta.updateTag({ name: 'twitter:description', content: description });
    });
  }
}

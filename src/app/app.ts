import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteNav } from './components/site-nav/site-nav';
import { LanguageService } from './services/language.service';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteNav, SiteFooter, TranslatePipe],
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.language.init();
    this.seo.init();
  }
}

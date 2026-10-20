import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { brand } from '../../config/brand';
import { footerIndustryLinks, navLinks } from '../../data/navigation.data';

@Component({
  selector: 'app-site-footer',
  imports: [TranslatePipe],
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  readonly brand = brand;
  readonly year = new Date().getFullYear();
  readonly links = navLinks;
  readonly industryLinks = footerIndustryLinks;
}

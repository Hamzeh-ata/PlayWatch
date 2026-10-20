import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CtaButton } from '../../components/cta-button/cta-button';
import { FaqItem } from '../../components/faq-item/faq-item';
import { FeatureGroup } from '../../components/feature-group/feature-group';
import { Icon } from '../../components/icon/icon';
import { IndustryCard } from '../../components/industry-card/industry-card';
import { ProductPreview } from '../../components/product-preview/product-preview';
import { brand } from '../../config/brand';
import { challenges } from '../../data/challenges.data';
import { faqs } from '../../data/faqs.data';
import { featureGroups } from '../../data/features.data';
import { howSteps } from '../../data/how-it-works.data';
import { featuredIndustry, supportingIndustries } from '../../data/industries.data';
import { valueProps } from '../../data/values.data';

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe,
    CtaButton,
    FaqItem,
    FeatureGroup,
    Icon,
    IndustryCard,
    ProductPreview,
  ],
  templateUrl: './home.html',
})
export class Home {
  readonly brand = brand;
  readonly featuredIndustry = featuredIndustry;
  readonly supportingIndustries = supportingIndustries;
  readonly valueProps = valueProps;
  readonly challenges = challenges;
  readonly featureGroups = featureGroups;
  readonly primaryFeature = featureGroups[0];
  readonly secondaryFeatures = featureGroups.slice(1);
  readonly howSteps = howSteps;
  readonly faqs = faqs;
  readonly openFaqId = signal(faqs[0].id);

  onFaqToggle(id: string): void {
    this.openFaqId.update((current) => (current === id ? '' : id));
  }
}

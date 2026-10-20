import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {
  previewOperationRows,
  previewReportBars,
  previewReservations,
  previewSessionRows,
  previewSummary,
  previewTables,
} from '../../data/preview.data';
import { PreviewKind } from '../../models/preview-kind.model';

@Component({
  selector: 'app-product-preview',
  imports: [TranslatePipe],
  templateUrl: './product-preview.html',
})
export class ProductPreview {
  readonly kind = input<PreviewKind>('floor');
  readonly compact = input(false);
  protected readonly tables = previewTables;
  protected readonly summary = previewSummary;
  protected readonly reservations = previewReservations;
  protected readonly sessionRows = previewSessionRows;
  protected readonly operationRows = previewOperationRows;
  protected readonly reportBars = previewReportBars;
}

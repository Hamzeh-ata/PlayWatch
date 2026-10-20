import { PreviewBar } from '../models/preview-bar.model';
import { PreviewRow } from '../models/preview-row.model';
import { PreviewStat } from '../models/preview-stat.model';
import { PreviewTable } from '../models/preview-table.model';

export const previewTables: PreviewTable[] = [
  { nameKey: 'preview.tables.t1', status: 'occupied', statusKey: 'preview.status.occupied', metaKey: 'preview.tables.t1Meta', fill: 72, wide: false },
  { nameKey: 'preview.tables.t2', status: 'available', statusKey: 'preview.status.available', metaKey: 'preview.tables.t2Meta', fill: 0, wide: false },
  { nameKey: 'preview.tables.t3', status: 'occupied', statusKey: 'preview.status.occupied', metaKey: 'preview.tables.t3Meta', fill: 84, wide: false },
  { nameKey: 'preview.tables.t4', status: 'reserved', statusKey: 'preview.status.reserved', metaKey: 'preview.tables.t4Meta', fill: 18, wide: false },
  { nameKey: 'preview.tables.t5', status: 'occupied', statusKey: 'preview.status.occupied', metaKey: 'preview.tables.t5Meta', fill: 36, wide: true },
  { nameKey: 'preview.tables.t6', status: 'available', statusKey: 'preview.status.available', metaKey: 'preview.tables.t6Meta', fill: 0, wide: true },
];

export const previewSummary: PreviewStat[] = [
  { labelKey: 'preview.summary.sessions', valueKey: 'preview.summary.sessionsValue' },
  { labelKey: 'preview.summary.occupied', valueKey: 'preview.summary.occupiedValue' },
  { labelKey: 'preview.summary.reserved', valueKey: 'preview.summary.reservedValue' },
];

export const previewReservations: PreviewRow[] = [
  { titleKey: 'preview.reservations.r1', metaKey: 'preview.reservations.r1Meta' },
  { titleKey: 'preview.reservations.r2', metaKey: 'preview.reservations.r2Meta' },
  { titleKey: 'preview.reservations.r3', metaKey: 'preview.reservations.r3Meta' },
];

export const previewSessionRows: PreviewRow[] = [
  { titleKey: 'preview.sessionRows.s1', metaKey: 'preview.sessionRows.s1Meta' },
  { titleKey: 'preview.sessionRows.s2', metaKey: 'preview.sessionRows.s2Meta' },
  { titleKey: 'preview.sessionRows.s3', metaKey: 'preview.sessionRows.s3Meta' },
  { titleKey: 'preview.sessionRows.s4', metaKey: 'preview.sessionRows.s4Meta' },
];

export const previewOperationRows: PreviewRow[] = [
  { titleKey: 'preview.operations.o1', metaKey: 'preview.operations.o1Meta' },
  { titleKey: 'preview.operations.o2', metaKey: 'preview.operations.o2Meta' },
  { titleKey: 'preview.operations.o3', metaKey: 'preview.operations.o3Meta' },
];

export const previewReportBars: PreviewBar[] = [
  { labelKey: 'preview.reports.d1', height: 42 },
  { labelKey: 'preview.reports.d2', height: 68 },
  { labelKey: 'preview.reports.d3', height: 54 },
  { labelKey: 'preview.reports.d4', height: 86 },
  { labelKey: 'preview.reports.d5', height: 61 },
  { labelKey: 'preview.reports.d6', height: 74 },
  { labelKey: 'preview.reports.d7', height: 49 },
];

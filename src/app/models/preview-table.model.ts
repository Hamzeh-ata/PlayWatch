export type PreviewStatus = 'occupied' | 'available' | 'reserved';

export interface PreviewTable {
  nameKey: string;
  status: PreviewStatus;
  statusKey: string;
  metaKey: string;
  fill: number;
  wide: boolean;
}

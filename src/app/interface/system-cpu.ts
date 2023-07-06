export interface SystemCpu {
  name: string;
  description: string;
  baseUnit: string;
  measurements: [
    {
      statistic: string;
      value: number;
    }
  ];
  availableTags: any[];
}

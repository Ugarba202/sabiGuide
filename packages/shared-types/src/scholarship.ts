export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  deadline: Date;
  eligibilityCriteria: string[];
  amountCents?: number;
  applicationUrl: string;
}

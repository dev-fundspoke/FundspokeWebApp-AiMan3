export interface CompanyInformation {
  companyName: {
    en: string;
    fr: string;
  };
  companyOverview: string;
  legalName: string;
  status: 'Active' | 'Inactive';
  fundspokeRepresentative: string;
  naicsCode?: string;
  federalBusinessRegistryNumber?: string;
  organizationType: 'Non Profit' | 'For Profit' | 'Indigenous' | 'Academic' | 'Municipality' | 'Other';
  corporationNumber: string;
  incorporationDate: string;
  sector: string[];
  logo?: File;
}

export const organizationTypes = [
  'Non Profit',
  'For Profit',
  'Indigenous',
  'Academic',
  'Municipality',
  'Other',
] as const;

export const sectors = [
  'Technology',
  'Healthcare',
  'Manufacturing',
  'Energy',
  'Agriculture',
  'Education',
  'Finance',
  'Transportation',
  'Construction',
  'Retail',
] as const;

export const companyStatuses = ['Active', 'Inactive'] as const;
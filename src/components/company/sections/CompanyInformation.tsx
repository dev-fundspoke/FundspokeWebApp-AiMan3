import React from 'react';
import { Divider } from 'antd';
import { BasicInformation } from './form-sections/BasicInformation';
import { OrganizationDetails } from './form-sections/OrganizationDetails';
import { RegistrationDetails } from './form-sections/RegistrationDetails';
import type { CompanyInformation as CompanyInformationType } from '../../../types/company';

interface CompanyInformationProps {
  onValuesChange?: (changedValues: any, values: CompanyInformationType) => void;
}

export const CompanyInformation: React.FC<CompanyInformationProps> = () => {
  return (
    <div className="company-info-form space-y-6">
      <BasicInformation />
      <Divider />
      <OrganizationDetails />
      <Divider />
      <RegistrationDetails />
    </div>
  );
};
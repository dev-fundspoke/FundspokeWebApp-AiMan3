import React, { useState } from 'react';
import { Collapse } from 'antd';
import { CompanyInformation } from './CompanyInformation';
import { CompanyLogo } from './form-sections/CompanyLogo';
import { Addresses } from './form-sections/Addresses';
import { DocumentLibrary } from './form-sections/DocumentLibrary';
import { Personnel } from './form-sections/Personnel';
import { CompanyStatusDisplay } from '../components/CompanyStatusDisplay';
import type { FormInstance } from 'antd/es/form';

interface CompanyFormContentProps {
  form: FormInstance;
  formRef: React.RefObject<FormInstance>;
}

export const CompanyFormContent: React.FC<CompanyFormContentProps> = ({
  form,
  formRef,
}) => {
  const [addressCount, setAddressCount] = useState(0);
  const [documentCount, setDocumentCount] = useState(0);

  const handleValuesChange = () => {
    const values = form.getFieldsValue();
    if (values.companyName?.en && values.status) {
      return <CompanyStatusDisplay 
        companyName={values.companyName.en} 
        status={values.status} 
      />;
    }
    return null;
  };

  const items = [
    {
      key: 'companyInfo',
      label: 'Company Information',
      children: <CompanyInformation onValuesChange={handleValuesChange} />,
      extra: handleValuesChange()
    },
    {
      key: 'companyLogo',
      label: 'Company Logo',
      children: <CompanyLogo />
    },
    {
      key: 'addresses',
      label: 'Addresses',
      children: <Addresses onAddressCountChange={setAddressCount} />,
      extra: <span className="text-sm opacity-70">Number of Addresses: {addressCount}</span>
    },
    {
      key: 'documents',
      label: 'Document Library',
      children: <DocumentLibrary />,
      extra: <span className="text-sm opacity-70">Number of Documents: {documentCount}</span>
    },
    {
      key: 'personnel',
      label: 'Personnel',
      children: <Personnel />,
      extra: <span className="text-sm opacity-70">Demographics & Composition</span>
    }
  ];

  return (
    <Collapse
      defaultActiveKey={['companyInfo']}
      className="company-info-form"
      items={items}
    />
  );
};
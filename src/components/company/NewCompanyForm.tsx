import React from 'react';
import { Form } from 'antd';
import { SciFiCard } from '../common/SciFiCard';
import { CompanyFormContent } from './sections/CompanyFormContent';
import { FormActions } from './FormActions';
import { useCompanyForm } from './hooks/useCompanyForm';
import type { CompanyInformation } from '../../types/company';

export const NewCompanyForm: React.FC = () => {
  const { form, formRef, handleSaveDraft, handleSubmit } = useCompanyForm();

  return (
    <SciFiCard 
      className="w-full p-6 md:p-8"
    >
      <Form<CompanyInformation>
        form={form}
        ref={formRef}
        layout="vertical" 
        className="w-full"
        requiredMark="optional"
        onFinish={handleSubmit}
      >
        <CompanyFormContent form={form} formRef={formRef} />
        
        <div className="flex justify-end mt-8 md:mt-12">
          <FormActions 
            onSaveDraft={handleSaveDraft}
            onSubmit={() => form.submit()}
          />
        </div>
      </Form>
    </SciFiCard>
  );
};
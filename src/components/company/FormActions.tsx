import React from 'react';
import { Button, Space } from 'antd';
import { darkTheme } from '../../styles/themes/dark';

interface FormActionsProps {
  onSaveDraft: () => void;
  onSubmit: () => void;
}

export const FormActions: React.FC<FormActionsProps> = ({
  onSaveDraft,
  onSubmit,
}) => {
  const buttonStyle = {
    minWidth: '140px',
    height: '44px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 500,
  };

  return (
    <Space size={16}>
      <Button 
        size="large" 
        onClick={onSaveDraft}
        style={{
          ...buttonStyle,
          borderColor: darkTheme.colors.accent.secondary,
          color: darkTheme.colors.accent.secondary,
        }}
        className="hover:shadow-lg transition-all duration-300"
      >
        Save Draft
      </Button>
      <Button 
        type="primary" 
        size="large"
        onClick={onSubmit}
        style={{
          ...buttonStyle,
          background: darkTheme.colors.accent.primary,
          borderColor: darkTheme.colors.accent.primary,
        }}
        className="hover:shadow-lg transition-all duration-300"
      >
        Submit
      </Button>
    </Space>
  );
};
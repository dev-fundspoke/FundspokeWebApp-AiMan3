import React from 'react';
import { message, App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';

let messageApi: MessageInstance;

const ThemedMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messageHolder, contextHolder] = message.useMessage();
  React.useEffect(() => {
    messageApi = messageHolder;
  }, [messageHolder]);

  return (
    <App>
      {contextHolder}
      {children}
    </App>
  );
};

export const showMessage = {
  info: (content: string) => messageApi?.info(content),
  success: (content: string) => messageApi?.success(content),
  error: (content: string) => messageApi?.error(content),
  warning: (content: string) => messageApi?.warning(content),
};

export default ThemedMessage;
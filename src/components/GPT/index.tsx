import React from 'react';
import styles from './index.less';
import { useState } from 'react';
import { Button, Popover } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const GPT: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(!open);
  };
  return (
    <Popover
      content={
        <iframe
          className={styles.iframeWindow}
          src="http://43.142.142.39:65071/#/chat_web"
        />
      }
      trigger="click"
      open={open}
      className={styles.popover}
      placement="bottom"
      autoAdjustOverflow={false}
    >
      <Button
        icon={<QuestionCircleOutlined />}
        type="primary"
        shape="circle"
        size="large"
        onClick={handleOpenChange}
      />
    </Popover>
  );
};

export default GPT;

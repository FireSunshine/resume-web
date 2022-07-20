import React from 'react';
import { useHistory } from 'react-router';
import Button from '@src/common/components/MyButton';
import ROUTER from '@common/constants/router';
import './index.less';

const ResumeAction = () => {
  const history = useHistory();
  // 返回首页
  const onBack = () => history.push(ROUTER.root);
  // 导出PDF
  const onExport = () => {};
  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <Button size="middle" className="export-btn" onClick={onExport}>
        导出PDF
      </Button>
    </div>
  );
};

export default ResumeAction;

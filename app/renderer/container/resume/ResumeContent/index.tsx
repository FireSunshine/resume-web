import React from 'react';
import * as UseTemplateList from './useTemplates';
import ScrollBox from '@src/common/components/MyScrollBox';

const ResumeContent = () => {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;
  return (
    <ScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
    </ScrollBox>
  );
};

export default ResumeContent;

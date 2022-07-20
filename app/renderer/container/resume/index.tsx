import React from 'react';
import fileAction from '@src/common/utils/file';
import { getAppPath } from '@src/common/utils/appPath';
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';
import './index.less';

function Resume() {
  // 👇 读取一下当前这个文件内容
  getAppPath().then((rootPath: string) => {
    console.log('应用程序的目录路径为: ', rootPath);
    console.log('文件读取，内容数据为: ');
    fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(data);
    });
  });
  return (
    <div styleName="container">
      <div styleName="header">
        <ResumeAction />
      </div>
      <div styleName="content">
        <ResumeContent />
      </div>
      <div styleName="toolbar">
        <ResumeToolbar />
      </div>
    </div>
  );
}
export default Resume;

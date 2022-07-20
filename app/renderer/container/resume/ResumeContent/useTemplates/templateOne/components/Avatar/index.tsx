/**
 * @desc 头像
 * @author sunshine
 */
import React from 'react';
import './index.less';
import AvatarImage from '@assets/avatar.jpeg';

function Avatar() {
  return (
    <div styleName="box">
      <div styleName="avatar">
        <img src={AvatarImage} />
      </div>
    </div>
  );
}

export default Avatar;

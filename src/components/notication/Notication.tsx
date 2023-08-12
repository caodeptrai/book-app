import React from 'react'
import Sign from '../sign/Sign'
import {  Popover } from 'antd';

const content = (
    <div>
      <span>Tài khoản</span>
      <span>Đăng xuất</span>
    </div>
  );

const Notication = () => {
  return (
    <>
        <Popover content={content} title="Thông báo" trigger="hover">
            <div>
            <Sign count={5} className="fa-regular fa-bell"/>
            </div>
        </Popover>
    </>
  )
}

export default Notication
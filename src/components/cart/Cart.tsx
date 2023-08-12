import React from "react";
import Sign from "../sign/Sign";
import { Popover } from "antd";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const Cart = () => {
  return (
    <>
      <Popover content={content} title="Giỏ hàng" trigger="hover">
        <div>
          <Sign count={5} className="fa-solid fa-cart-shopping" />
        </div>
      </Popover>
    </>
  );
};

export default Cart;

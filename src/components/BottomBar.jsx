import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { AiOutlineMessage } from "react-icons/ai";
import { RiStore2Line } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-left">
        <div className="text-center">
          <RiStore2Line size={20} />
          <div>Loja</div>
        </div>
        <div className="text-center">
          <AiOutlineMessage size={20} />
          <div>Contatar</div>
        </div>
      </div>

      <div className="bottom-bar-right">
        <div className="bottom-bar-cart">
          <BsCartPlus className="cart-icon" />
        </div>
        <Button className="bottom-bar-button">
          Compre Agora
        </Button>
      </div>
    </div>
  );
};

export default BottomBar;
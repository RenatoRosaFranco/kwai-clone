import React from 'react';
import { Badge } from 'react-bootstrap';
import { MdHelpOutline } from "react-icons/md";
import { PiArrowFatDownFill } from "react-icons/pi";

const ProductHeader = () => {
  return (
    <div class='product-header'>
      <div className="d-flex align-items-center mb-2">
        <Badge className="me-2 product-badge">
          <PiArrowFatDownFill /> O Mais Barato
        </Badge>
        <span className='product-price'>
          A partir de <span className='product-price-value'>R$8,99</span>
        </span>
      </div>

      <div className='product-name mb-2'>
        Kit 3 par, 12 par, 24 par variação de Meias Femininas confortável
      </div>

      <div className='product-sale-count'>
        4.486 Vendidos <MdHelpOutline/>
      </div>
    </div>
  );
};

export default ProductHeader;
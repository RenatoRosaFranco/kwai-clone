import React from 'react';

const Badgets = () => {
  return (
    <div className='badgets-container'>
      <span 
      className='badget free-shipping-badget'>
        Frete Grátis Sem valor mínimo
      </span>
      <span
      className='badget discount-badget'>
        5% OFF Desconto máx
      </span>
    </div>
  );
};

export default Badgets;

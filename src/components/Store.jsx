import React from 'react';
import { Button, Row, Col, Image } from 'react-bootstrap';

const Store = () => {
  const storeData = {
    name: 'jz moda shop',
    recurringClients: '18.051',
    productCount: 439,
    avatar: 'https://picsum.photos/seed/logo/60/60',
  };

  return (
    <div className="store-container d-flex justify-content-between align-items-center p-3">
      <div className="d-flex align-items-center">
        <Image
          src={storeData.avatar}
          alt={storeData.name}
          roundedCircle
          width={48}
          height={48}
          className="me-2"
        />
        <div>
          <h6 className="mb-0 text-capitalize fw-semibold store-name mb-1">{storeData.name}</h6>
          <div className="store-recurring-clients mb-1">
            {storeData.recurringClients} clientes recorrentes
          </div>
          <div className="store-product-count">
            {storeData.productCount} Produtos
          </div>
        </div>
      </div>

      <Button variant="outline-secondary store-visit-button" size="sm">
        Visitar
      </Button>
    </div>
  );
};

export default Store;
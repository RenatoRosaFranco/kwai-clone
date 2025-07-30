import React from 'react';
import { Container } from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa";

const StoreOptions = () => {
  const options = [
    {
      cover: 'https://picsum.photos/id/1011/300/300',
      name: 'Vestido feminina off ombro busto auto modelado',
      price: 'R$35,00',
    },
    {
      cover: 'https://picsum.photos/id/1012/300/300',
      name: 'Calça feminina eslycra auto esticável de inverno',
      price: 'R$39,00',
    },
    {
      cover: 'https://picsum.photos/id/1013/300/300',
      name: 'Blusa feminina TRANSPARENTE floral elegante',
      price: 'R$20,00',
    },
    {
      cover: 'https://picsum.photos/id/1014/300/300',
      name: 'Top feminino jeans',
      price: 'R$24,00',
    },
    {
      cover: 'https://picsum.photos/id/1015/300/300',
      name: 'Camisa básica algodão',
      price: 'R$30,00',
    },
    {
      cover: 'https://picsum.photos/id/1016/300/300',
      name: 'Camisa básica algodão',
      price: 'R$30,00',
    },
    {
      cover: 'https://picsum.photos/id/1016/300/300',
      name: 'Camisa básica algodão',
      price: 'R$30,00',
    },
  ];

  const StoreItem = ({ item }) => {
    const { cover, name, price } = item;

    return (
      <div className="store-card me-2" style={{ minWidth: 110 }}>
        <img src={cover} alt={name} className="store-card-img" />
        <div className="store-card-name">{name}</div>
        <div className="store-card-price fw-bold">{price}</div>
      </div>
    );
  };

  return (
    <Container className="store-options-container mb-4">
      <h5 className="fw-bold mb-3 d-flex justify-content-between align-items-center">
        <span>Principais Escolhas da Loja</span>
        <FaAngleRight className="icon" size={16} />
      </h5>

      <div className="store-options-list">
        {options.map((item, index) => (
          <StoreItem key={index} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default StoreOptions;

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FiMapPin } from "react-icons/fi";  
import { RiShieldCheckFill } from 'react-icons/ri';
import { FaCaretRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const ShippingSection = () => {
  return (
    <>
      <div className='shipping-container'>
        <Row className="align-items-center mb-1">
          <Col xs={3}>
            <strong className="shipping-title">Envio</strong>
          </Col>
          <Col xs={9} className="d-flex justify-content-end align-items-center text-truncate shipping-address-container">
            <FiMapPin size={13} className="me-1" />
            <span className="shipping-address">
              São Paulo, São Paulo
              <FaAngleRight className="ms-1 icon" size={16} />
            </span>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12} className="d-flex align-items-center">
            <strong className="shipping-cost">Custo:</strong>
            <span className="bluesky ms-1 me-1" style={{ fontWeight: 600 }}>Free</span>
            <span className="shipping-price">
              R$7,06
            </span>
            <span class='shipping-price-badge'>
              -R$7,06
            </span>
          </Col>
        </Row>
      </div>

      <section className="refund-container mt-0">
        <Container>
          <Row className="d-flex align-items-center ">
            <Col className="d-flex align-items-center refund-section">
              <RiShieldCheckFill className="me-2 icon" size={16} />
              <span className='refund-text'>Reembolso para quaisquer problemas de logística</span>
            </Col>
          </Row>
        </Container>
        <FaCaretRight className="ms-2 icon" size={14} />
      </section>
    </>
  );
};

export default ShippingSection;

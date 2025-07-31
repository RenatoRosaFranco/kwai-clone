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
            <strong style={{ fontSize: '0.92rem', marginRight: 4 }}>Custo:</strong>
            <span className="bluesky" style={{ fontWeight: 600 }}>Free</span>
            <span style={{ textDecoration: 'line-through', color: '#bbb', marginLeft: 4, fontSize: '0.88rem' }}>
              R$7,06
            </span>
            <span style={{
              color: '#159f95',
              fontSize: '0.86rem',
              marginLeft: 6,
              backgroundColor: '#e9f8f7',
              padding: '1px 5px',
              borderRadius: '4px'
            }}>
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
              <FaCaretRight className="ms-2 icon" size={14} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ShippingSection;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetails = () => {
  return (
    <Container className='product-details-container'>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <h5 className="fw-bold">Descrição do produto</h5>
          <p className="text-muted">Par de Meias femininas básica, Confortavel - Tamanho M</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetails;
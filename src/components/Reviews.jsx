import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa";

const Reviews = () => {

  const reviews = [
    {
      name: 'A****3',
      label: 'cano curto Sortida, Kit 3 par',
      rating: 5,
      comment: 'Produto de qualidade, entrega rápida e preço justo.',
    },
    {
      name: 'X****t',
      label: 'cano curto Sortida, Kit 3 par',
      rating: 5,
      comment: 'As meias são boas e confortáveis, mas achei que algumas cores poderiam ser diferentes. No geral, gostei bastante e a entrega foi rápida. Valeu a pena! Vou continuar usando!',
    },
      {
      name: 'X****t',
      label: 'cano curto Sortida, Kit 3 par',
      rating: 5,
      comment: 'As meias são boas e confortáveis, mas achei que algumas cores poderiam ser diferentes. No geral, gostei bastante e a entrega foi rápida. Valeu a pena! Vou continuar usando!',
    },
  ]

  const Review = ({ review }) => {
    return (
      <Card className="review-card mb-1 p-0">
        <Card.Body>
          <Row className="align-items-start p-0 card-body-row">
            <Col xs="auto">
              <div className="review-card-avatar"></div>
            </Col>

            <Col className="ps-0">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-1">
                  <div className='ms-3'>
                    <span className="fw-semibold review-card-name">{review.name}</span>
                  </div>
                  <div className="d-flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="review-card-star" />
                    ))}
                  </div>
                </div>

                <div className="text-muted small review-card-label mb-1">
                  {review.label}
                </div>

                <p className="review-card-comment mb-0">{review.comment}</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };


  return (
    <Container className='reviews-container'>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <h5 className="fw-bold mb-2 d-flex justify-content-between align-items-center">
            <span>Avaliação do produto (1.220)</span>
            <FaAngleRight className="icon" size={16} />
          </h5>
                  
          {reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </Col>
      </Row>
    </Container>
  )
};

export default Reviews;

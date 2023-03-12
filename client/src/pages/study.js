import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function Study() {
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <Card>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Study;

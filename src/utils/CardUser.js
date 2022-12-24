import React from "react";
import { Col, Container, Card, Button } from "react-bootstrap";

function CardUser({ props }) {
  return (
    <>
      {props.map((e) => {
        return (
          <Col className={"mb-3"} sm={6} xs={6} md={6} lg={6}>
            <Card className="" style={{ maxWidth: "40rem" }}>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Img
                  style={{
                    width: "160px",
                  }}
                  src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
                />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </div>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default CardUser;

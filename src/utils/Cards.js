import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Cards({ props }) {
  return (
    <>
      {props.map((e) => {
        return (
          <Col className={"mb-3"} sm={4} xs={6} md={3}>
            <Link className=" text-decoration-none" to={`/create/${e.id}`}>
              <Card
                className={"position-relative  h-100"}
                style={{ maxWidth: "30rem" }}
              >
                <div
                  style={{
                    top: "10px",
                    left: "10px",
                    backgroundColor: e.vote_average > 6 ? "green" : "#808080",
                    borderRadius: "5px",
                    padding: "2px 5px",
                    color: "#fff",
                  }}
                  className="position-absolute d-flex align-items-center"
                >
                  <FaStar
                    className="me-1"
                    style={{
                      width: "15px",
                      height: "15px",
                      fill: "#fff",
                    }}
                  />
                  <span>{e.vote_average}</span>
                </div>
                <Card.Img
                  variant="top"
                  src={
                    e.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${e.poster_path}`
                      : "https://w7.pngwing.com/pngs/998/203/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png"
                  }
                />
                <Card.Body>
                  <Card.Title className="m-0  fs-6">
                    {e.name ? e.name : e.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      })}
    </>
  );
}

export default Cards;

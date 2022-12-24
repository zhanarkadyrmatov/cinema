import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Card } from "react-bootstrap";
import CenterSpinner from "../utils/CenterSpinner";
import StarRatings from "react-star-ratings";

function CeateComponetn() {
  const item = useParams();
  const [ceate, setCeate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${item.id}?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`
      )
      .then((e) => {
        setCeate(e.data);
      })
      .catch((e) => {
        alert("error api!");
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(ceate);
  return (
    <>
      <Container>
        {loading ? (
          <CenterSpinner />
        ) : (
          <>
            <div className="position-relative d-none d-md-block">
              <img
                style={{
                  maxWidth: "100%",
                }}
                src={`https://image.tmdb.org/t/p/original/${ceate.backdrop_path}`}
                alt=""
              />
              <div
                style={{
                  top: "300px",
                  left: "30px",
                }}
                className="media position-absolute d-flex align-items-end gap-5  text-black"
              >
                <img
                  style={{
                    maxWidth: "200px",
                    border: "1px solid #fff",
                    borderRadius: "5px",
                  }}
                  src={`https://image.tmdb.org/t/p/w500/${ceate.poster_path}`}
                />
                <div>
                  <h2 className="">{ceate.name}</h2>
                  <h5>{ceate.tagline}</h5>
                  {ceate.genres.map((e) => {
                    return <span className="me-2 fs-5">{e.name},</span>;
                  })}
                  <div>
                    <StarRatings
                      rating={ceate.vote_average}
                      numberOfStars={10}
                      starDimension="30px"
                      starSpacing="2px"
                    />
                  </div>
                </div>
              </div>
              <p
                style={{
                  margin: "180px 0",
                }}
                // className="mt-5"
              >
                {ceate.overview}
              </p>
            </div>
            <div className="m-2 d-block d-md-none">
              <Card style={{ maxWidth: "30rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${ceate.poster_path}`}
                />
                <Card.Body className="text-center">
                  <Card.Title className="fs-4">{ceate.name}</Card.Title>
                  <Card.Text className="m-0">{ceate.tagline}</Card.Text>
                  {/* <Card.Text>
                {ceate.genres.map((e) => {
                  return <span className="me-2">{e.name},</span>;
                })}
              </Card.Text> */}
                  <div>
                    <StarRatings
                      rating={ceate.vote_average}
                      numberOfStars={10}
                      starDimension="25px"
                      starSpacing="2px"
                    />
                  </div>
                  <Card.Text>{ceate.overview}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default CeateComponetn;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "../utils/Cards";
import CenterSpinner from "../utils/CenterSpinner";

function FIlimComponetn() {
  const [filim, setFilim] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?page=1&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`
      )
      .then((e) => {
        setFilim(e.data.results);
      })
      .catch((e) => {
        alert("error api!");
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <Container>
        <h2 className="mb-2">Фильмы</h2>
        {loading ? (
          <CenterSpinner />
        ) : (
          <Row className={""}>
            <Cards props={filim} />
          </Row>
        )}
      </Container>
    </div>
  );
}

export default FIlimComponetn;

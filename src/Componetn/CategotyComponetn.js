import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Cards from "../utils/Cards";
import CenterSpinner from "../utils/CenterSpinner";

function CategotyComponetn() {
  const item = useParams();
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${item.id}&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`
      )
      .then((e) => {
        setCategory(e.data.results);
      })
      .catch((e) => {
        alert("error api!");
      })
      .finally(() => setLoading(false));
  }, [item]);
  return (
    <div>
      <Container>
        {loading ? (
          <CenterSpinner />
        ) : (
          <Row className={""}>
            <Cards props={category} />
          </Row>
        )}
      </Container>
    </div>
  );
}

export default CategotyComponetn;

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Cards from "../utils/Cards";
import axios from "axios";
import CenterSpinner from "../utils/CenterSpinner";

function HomeComponetn() {
  const [user, setUser] = useState([]);
  const [user2, setUser2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [buttonTV, setButtonTV] = useState(true);
  const [buttonTV2, setButtonTV2] = useState(true);

  useEffect(() => {
    axios
      .get(
        buttonTV
          ? `https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`
          : `https://api.themoviedb.org/3/movie/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`
      )
      .then((e) => {
        setUser(e.data.results);
      })
      .catch((e) => {
        alert("error api!");
      })
      .finally(() => setLoading(false));
  }, [buttonTV]);
  useEffect(() => {
    axios
      .get(
        buttonTV2
          ? `https://api.themoviedb.org/3/movie/top_rated?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`
          : `https://api.themoviedb.org/3/movie/upcoming?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`
      )
      .then((e) => {
        setUser2(e.data.results);
      })
      .catch((e) => {
        alert("error api!");
      })
      .finally(setLoading2(false));
  }, [buttonTV2]);
  return (
    <Container>
      <div className="mb-2 d-flex justify-content-between aling-items-center flex-wrap">
        <h3>Что популярно</h3>
        <ToggleButtonGroup name="options">
          <ToggleButton
            style={{
              backgroundColor: buttonTV ? "#0a58ca" : "#5c636a",
            }}
            onClick={() => {
              setButtonTV(true);
              setLoading(true);
            }}
          >
            ПО ТВ
          </ToggleButton>
          <ToggleButton
            style={{
              backgroundColor: buttonTV ? "#5c636a" : "#0a58ca",
            }}
            onClick={() => {
              setButtonTV(false);
              setLoading(true);
            }}
          >
            В кинотеатрах
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {loading ? (
        <CenterSpinner />
      ) : (
        <Row className={""}>
          <Cards props={user.slice(0, 8)} />
        </Row>
      )}
      <div className="mb-2 d-flex justify-content-between aling-items-center flex-wrap">
        <h3>Что в тренде</h3>
        <ToggleButtonGroup name="options">
          <ToggleButton
            style={{
              backgroundColor: buttonTV2 ? "#0a58ca" : "#5c636a",
            }}
            onClick={() => {
              setButtonTV2(true);
              setLoading2(true);
            }}
          >
            Сегодня
          </ToggleButton>
          <ToggleButton
            style={{
              backgroundColor: buttonTV2 ? "#5c636a" : "#0a58ca",
            }}
            onClick={() => {
              setButtonTV2(false);
              setLoading2(true);
            }}
          >
            На этой неделе
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      {loading2 ? (
        <CenterSpinner />
      ) : (
        <Row>
          <Cards props={user2.slice(0, 8)} />
        </Row>
      )}
    </Container>
  );
}

export default HomeComponetn;

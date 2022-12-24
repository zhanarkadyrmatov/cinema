import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import CardUser from "../utils/CardUser";
import CenterSpinner from "../utils/CenterSpinner";

function UserComponetn() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?page=${page}&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`
      )
      .then((e) => {
        setUsers((r) => [...r, ...e.data.results]);
        setBtnLoading(false);
      })
      .catch((e) => {
        alert("error api!");
      })
      .finally(() => setLoading(false));
  }, [page, btnLoading]);
  return (
    <div>
      <Container>
        <h2 className="mb-2">Популярные актёры</h2>
        {loading ? (
          <CenterSpinner />
        ) : (
          <>
            <Row>
              <CardUser props={users} />
            </Row>
            <div className={"d-flex justify-content-center"}>
              <Button
                onClick={() => {
                  setPage((e) => e + 1);
                  setBtnLoading(true);
                }}
                className="m-4 "
                variant="primary"
              >
                {btnLoading ? (
                  <Spinner
                    className="me-2"
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : null}
                Загрузить еще
              </Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default UserComponetn;

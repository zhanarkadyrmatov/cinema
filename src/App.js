import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Col, Container, Row, Table } from "react-bootstrap";
import Header from "./Componetn/Header";
import HomeComponetn from "./Componetn/HomeComponetn";
import FilimComponetn from "./Componetn/FIlimComponetn";
import CategotyComponetn from "./Componetn/CategotyComponetn";
import SerialComponetn from "./Componetn/SerialComponetn";
import UserComponetn from "./Componetn/UserComponetn";
import CreateComponetn from "./Componetn/CeateComponetn";
import axios from "axios";
import { Link } from "react-router-dom";
import PanelComponetn from "./Componetn/PanelComponetn";

export const AddContext = createContext();

function App() {
  const [user, setUser] = useState(1);
  const [categery, setCategery] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`
      )
      .then((e) => {
        setCategery(e.data.genres);
      })
      .catch((e) => {
        alert("error api!");
      })
      .finally();
  }, []);

  return (
    <AddContext.Provider value={{ user, setUser }}>
      <div className="App">
        <header>
          <Header />
        </header>
        <Container>
          <Row className="mt-2">
            <Col md={12} lg={9}>
              <main>
                <Routes>
                  <Route path="/" element={<HomeComponetn />} />
                  <Route path="filim/" element={<FilimComponetn />} />
                  <Route path="categoty/:id" element={<CategotyComponetn />} />
                  <Route path="serial/" element={<SerialComponetn />} />
                  <Route path="user/" element={<UserComponetn />} />
                  <Route path="create/:id" element={<CreateComponetn />} />
                  <Route path="panel/:id" element={<PanelComponetn />} />
                </Routes>
              </main>
            </Col>
            <Col className="none" md={0} lg={3}>
              <Table striped bordered hover className="table-hover">
                <thead>
                  {categery.map((e) => {
                    return (
                      <tr>
                        <td className="">
                          <Link
                            style={{
                              color: "black",
                            }}
                            to={`panel/${e.id}`}
                            className="text-decoration-none hover:text-primary"
                          >
                            {e.name.toUpperCase()}
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </thead>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </AddContext.Provider>
  );
}

export default App;

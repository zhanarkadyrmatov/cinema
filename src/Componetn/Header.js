import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";

function Header() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`
      )
      .then((e) => {
        setCategory(e.data.genres);
      });
  }, []);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="p-0 m-0"
              style={{ width: "120px" }}
              src="https://cinematica.kg/99c13a566f8363476f14db5420aaee6b.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto fs-6 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Главная
              </Nav.Link>
              <Nav.Link as={Link} to={`filim`}>
                Фильмы
              </Nav.Link>
              <Nav.Link as={Link} to={`serial`}>
                Сериалы
              </Nav.Link>
              <Nav.Link as={Link} to={`user`}>
                Актёры
              </Nav.Link>
              <NavDropdown title="Жанры TV" id="navbarScrollingDropdown">
                {category.map((e) => {
                  return (
                    <NavDropdown.Item as={Link} to={`categoty/${e.id}`}>
                      {e.name.toUpperCase().slice()}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

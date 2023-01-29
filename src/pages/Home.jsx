import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  filterProductsCategoryThunk,
  filterProductsHeadlineThunk,
  getProductsThunk,
} from "../store/slices/products.Slice";

const Home = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [productsSearch, setProductsSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <div>
      <Row>
        {/*Categories*/}
        <Col lg={3}>
          <ListGroup>
            {categories.map((category) => (
              <ListGroupItem
                onClick={() =>
                  dispatch(filterProductsCategoryThunk(category.id))
                }
                style={{ cursor: "pointer" }}
                key={category.id}
              >
                {category.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>

        {/*Products*/}
        <Col lg={9}>
          <h1>Home</h1>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={productsSearch}
              onChange={(e) => setProductsSearch(e.target.value)}
            />
            <Button
              onClick={() =>
                dispatch(filterProductsHeadlineThunk(productsSearch))
              }
              variant="outline-secondary"
              id="button-addon2"
            >
              Button
            </Button>
          </InputGroup>

          <Row xs={1} md={2} lg={3} className="g-4">
            {productsList.map((product) => (
              <Col key={product.id}>
                <Card
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={product.images[0].url}
                    style={{ height: 200, objectFit: "contain" }}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      <p>${product.price}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

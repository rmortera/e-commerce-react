import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { filterProductsCategoryThunk } from "../store/slices/products.Slice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const productList = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        dispatch(filterProductsCategoryThunk(res.data.category?.id));
      });
  }, [id]);

  console.log(product);

  return (
    <div>
      <div>
        <h1>{product.title}</h1>
        <h4>${product.price} </h4>
      </div>

      <Row>
        {/*Product Description*/}
        <Col lg={9}>
          <div>
            <img
              src={product.images?.[0].url}
              style={{ width: 300 }}
              className="img-fluid"
            />
          </div>
          <br />
          <p>{product.description} </p>
          <Button variant="primary" size="xlg" className="mb-5">
            Add to cart
          </Button>
        </Col>

        <Col></Col>

        {/*Related Products*/}
        <Col lg={3}>
          {" "}
          <h4>Related Products</h4>
          <ListGroup variant="flush">
            {productList?.map((productItem) => (
              <ListGroup.Item
                key={productItem.id}
                onClick={() => navigate(`/product/${productItem.id}`)}
                style={{ cursor: "pointer" }}
              >
                <p className="text-muted">{productItem.title}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;

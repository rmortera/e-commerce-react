import React, { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPurchasesThunk } from "../store/slices/purchases.slice";

const Purchases = () => {
  const purchases = useSelector((state) => state.purchases);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <div>
      <h1>Purchases</h1>
      <ul>
        <Row xs={1} md={2} lg={3} className="g-4">
          {purchases.map((purchase) => (
            <Col key={purchase.id}>
              <li>
                <Link to={`/product/${purchase.product?.id}`}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={purchase.product?.images[0].url}
                    />
                    <Card.Body>
                      <Card.Title>{purchase.product?.title}</Card.Title>
                      <Card.Text>${purchase.product?.price}</Card.Text>

                      <Button variant="primary">
                        {" "}
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
            </Col>
          ))}
        </Row>
      </ul>
    </div>
  );
};

export default Purchases;

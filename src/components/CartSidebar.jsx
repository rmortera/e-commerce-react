import React, { useEffect } from "react";
import { Button, Card, Col, Offcanvas, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk, purchasesCartThunk } from "../store/slices/cart.Slice";

const CartSidebar = ({ show, handleClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let total = 0;
  cart.forEach((product) => {
    console.log(product);
    const productTotal = Number(product.product.price) * product.quantity;
    total += productTotal;
  });

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  // console.log(cart);

  return (
    <Offcanvas placement="end" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul>
          <Row className="g-2">
            {cart?.map((cartProduct) => (
              <li key={cartProduct.id}>
                <Col>
                  <Card>
                    <Card.Img
                      variant="start"
                      src={cartProduct.product.images[0].url}
                      style={{ height: 50, objectFit: "contain" }}
                    />
                    <Card.Body>
                      <Card.Title>{cartProduct.product.title}</Card.Title>
                      <Card.Text>${cartProduct.product.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </li>
            ))}
          </Row>
        </ul>
        <Button onClick={() => dispatch(purchasesCartThunk())}>Checkout</Button>{" "}
        <Card.Title placement="end">Total:</Card.Title>
        <Card.Text>${total}</Card.Text>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartSidebar;

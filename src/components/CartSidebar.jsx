import React, { useEffect } from "react";
import { Button, Card, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk, purchasesCartThunk } from "../store/slices/cart.Slice";

const CartSidebar = ({ show, handleClose }) => {
  const purchaseCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  return (
    <Offcanvas placement="end" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul>
          {purchaseCart?.map((cartProduct) => (
            <li>
              <Card>
                <Card.Img
                  variant="top"
                  src={cartProduct.product.images[0].url}
                />
                <Card.Body>
                  <Card.Title>{cartProduct.product.title}</Card.Title>
                  <Card.Text>{cartProduct.product.price}</Card.Text>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>

        <Button onClick={() => dispatch(purchasesCartThunk())}>Checkout</Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartSidebar;

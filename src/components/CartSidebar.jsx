import React, { useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk, purchasesCartThunk } from "../store/slices/cart.Slice";

const CartSidebar = ({ show, handleClose }) => {
  const cart = useSelector((state) => state.cart);
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
        <Button onClick={() => dispatch(purchasesCartThunk())}>Checkout</Button>
        <ul>
          {cart?.map((cartProduct) => (
            <li>
              <img src={cartProduct.product.images[0].url} alt="" />
              {cartProduct.product.title}
            </li>
          ))}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartSidebar;

import React, { useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../store/slices/cart.Slice";

const Cart = ({ show, handleClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  return (
    <Offcanvas placement="end" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>your cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>Purchases</Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;

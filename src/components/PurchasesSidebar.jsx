import React from "react";
import { Offcanvas } from "react-bootstrap";

const PurchasesSidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>your cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>Purchases</Offcanvas.Body>
    </Offcanvas>
  );
};

export default PurchasesSidebar;

import React, { Fragment,} from "react";
import { Button, Modal, Image, Form, Row } from "react-bootstrap";
import { Logo } from "../assets/images";

const LoyalCustomer = ({ showLoyalCustmor, closeLoyalCustmor }) => {

  return (
    <Fragment>
      <Modal show={showLoyalCustmor} onHide={closeLoyalCustmor}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="register-main-box">
            <Form.Label column sm="12" required>
            <p  style={{ textAlign:"center" }}>You Are Not A Loyalty Customer</p>
            </Form.Label>
          </Form.Group>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default LoyalCustomer;

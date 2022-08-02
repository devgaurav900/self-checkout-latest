import React, { Fragment, useState } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
import TillLogout from "../popup/TillLogout";

const TillClose = ({ show, closeTill }) => {
  const [showLogout, setShowLogout] = useState(false);

  const showTillLogout = () => {
    setShowLogout(true);
  };
  const closeTillLogout = () => {
    setShowLogout(false);
  };

  return (
    <Fragment>
      <Modal show={show} onHide={closeTill}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <div className="register-heading">
            <p>Till Close</p>
          </div>
          <Form.Group as={Row} className="mb-3 register-main-box">
            <Form.Label column sm="4" required>
              Enter Till Id
            </Form.Label>
            <Col sm="8">
              <Form.Control type="number" placeholder="5989" />
            </Col>
            <div className="button-section">
              <Button variant="warning" onClick={showTillLogout}>
                Continue <GoArrowRight size={20} />
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
      </Modal>
      <TillLogout tillShow={showLogout} closeOtp={closeTillLogout} />
    </Fragment>
  );
};

export default TillClose;

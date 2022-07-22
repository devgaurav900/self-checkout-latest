import React, { useState, Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo,Flag } from "../assets/images";
import OtpVerification from "./otp-verfication";

const MobileOpen = ({ show, handleClose }) => {
  const [tillShow, setOtpShow] = useState(false);

  const showOtp = () => {
    setOtpShow(true);
  };
  const closeOtp = () => {
    setOtpShow(false);
  };
  
  return (
    <Fragment>
      <Modal className="mobile-verify" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3 mobile-main-box">
            <Form.Label column sm="4" required>
              Mobile No :-
            </Form.Label>
            <Col sm="8">
              <span><img src={Flag} alt="flag" className="flag-main"/></span>
              <Form.Control type="number" className="number-box" placeholder="+1-202-555-0183"/>
            </Col>
          </Form.Group>
          <div className="button-section">
            <Button variant="warning" onClick={showOtp}>
              Continue <GoArrowRight size={20} />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <OtpVerification tillShow={tillShow} closeOtp={closeOtp} />
    </Fragment>
  );
};

export default MobileOpen;

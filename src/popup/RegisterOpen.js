import React, { useState, useEffect, Fragment } from "react";
import { Button, Modal, Image, Form, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
import TillOpen from "../popup/TillOpen";
import { _registerOpen } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const RegisterOpen = ({ show, handleClose }) => {
  const [tillShow, setTillShow] = useState(false);
  const dispatch = useDispatch();

  const closeTill = () => {
    setTillShow(false);
  };

  useEffect(() => {
    _registerOpen(dispatch);
    
  }, [dispatch])

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <div className="register-heading">
            <p>REGISTER OPEN</p>
          </div>
          <Form.Group as={Row} className="mb-3 register-main-box">
            {/* <Form.Label column sm="4" required>
              Enter Register Id
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="number"
                placeholder="8701"
                onChange={(e) =>
                  localStorage.setItem("entered-register-id", e.target.value)
                }
              />
            </Col> */}
            <h3>Register 104 is Open</h3>
            <div className="button-section">
              <Button variant="warning" onClick={() => setTillShow(true)}>
                Continue <GoArrowRight size={20} />
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
      </Modal>
      <TillOpen tillShow={tillShow} closeTill={closeTill} />
    </Fragment>
  );
};

export default RegisterOpen;

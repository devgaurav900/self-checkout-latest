import React, { Fragment, useState } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
import TillOpened from "../popup/TillOpened";

const TillOpen = ({ tillShow, closeTill }) => {
  const [currentDate] = useState(new Date().toISOString().slice(0, -14));

  const [tillOpened, setTillopened] = useState(false);

  const tillOpenedClose = () => {
    setTillopened(false);
  };

  return (
    <Fragment>
      <Modal show={tillShow} onHide={closeTill}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <div className="register-heading">
            <p>TILL OPEN</p>
          </div>
          <Form.Group as={Row} className="mb-3 register-main-box">
            <Form.Label column sm="4">
              Enter Till Id
            </Form.Label>
            <Col sm="8">
              <Form.Control type="number" placeholder="8701" />
            </Col>
            <Form.Label column sm="4" className="mt-4">
              Enter Till Date
            </Form.Label>
            <Col sm="8" className="mt-4">
              <Form.Control
                id="till-date"
                type="date"
                min={currentDate}
                max={currentDate}
                value={currentDate}
              />
            </Col>
          </Form.Group>
          <div className="button-section">
            <Button variant="warning" onClick={() => setTillopened(true)}>
              Continue <GoArrowRight size={20} />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <TillOpened
        tillOpenedShow={tillOpened}
        closeTillOpened={tillOpenedClose}
      />
    </Fragment>
  );
};

export default TillOpen;

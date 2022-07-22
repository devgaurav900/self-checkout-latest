import React, { Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Logo} from "../assets/images";
import Ereceipt from "../assets/images/items/Ereceipt.png"
import { useTranslation } from 'react-i18next';
 
const Digitalrecipt = ({ show, handleClose }) => {
	const { t } = useTranslation();

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <Col sm="6 d-flex" className="popup-nav">
        <Image src={Ereceipt} alt="recipt" />
              <p>{t("digital-receipt")}</p>
            </Col>
            <Col sm="6">
            <Image src={Logo} alt="suntech-logo" />
            </Col>
          
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3 digital-recipt-box">
            <Form.Label column sm="5" required>
            {t("mobile-number :-")}
            </Form.Label>
            <Col sm="7">
              <Form.Control type="number" placeholder="" />
            </Col>
            <Form.Label column sm="5" required>
            {t("email :-")}
            </Form.Label>
            <Col sm="7">
              <Form.Control type="number" placeholder="" />
            </Col>
          </Form.Group>
          <div className="button-section">
            <Link to="/rating">
            <Button variant="warning">
              {t("submit")}
            </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Digitalrecipt;

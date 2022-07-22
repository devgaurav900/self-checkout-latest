import React, { Fragment } from "react";
import { Modal, Image, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Logo, CashPayment } from "../assets/images";
import { useTranslation } from 'react-i18next';



const Pay = ({ show, handleClose }) => {
  const { t } = useTranslation();


  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3 pay-main-box">
            <div className="pay-popup d-flex">
              <Form.Label column sm="6">
                <p>{t("total-amount")} </p>
              </Form.Label>
              <Col sm="6">
                <p>{t("150-aed")}</p>
              </Col>
            </div>
            <div className="pay-popup d-flex">
              <Form.Label column sm="9">
                <p>{t("tendered-reedem-amount")} </p>
              </Form.Label>
              <Col sm="3">
                <p>{t("50-aed")}</p>
              </Col>
            </div>
            <div className="pay-popup d-flex">
              <Form.Label column sm="6">
                <p>{t("balance_due")} </p>
              </Form.Label>
              <Col sm="6">
                <p>{t("100-aed")}</p>
              </Col>
            </div>
            <div className="amountpay-popup d-flex">
              <Form.Label column sm="6">
                <p>{t("amount_to_be_paid")} </p>
              </Form.Label>
              <Col sm="6" className="amount-paid">
                <input type="text" />
              </Col>
            </div>

            <div className="col-12 text-center action-button">
              <button className="pay-now">
                <img src={CashPayment} alt="Cash" width="20px" />
                <Link to="/payments/cards">{t("pay")}</Link>
              </button>
            </div>
          </Form.Group>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Pay;

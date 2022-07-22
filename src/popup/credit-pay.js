import React, { Fragment, useEffect } from "react";
import { Modal, Image, Form, Col, Row } from "react-bootstrap";
// import Otp from "../assets/images/payment-mode/otp.png"
import { Link } from "react-router-dom";
import { Logo, CashPayment } from "../assets/images";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { _getCheckoutTotal } from "../redux/actions";


const CreditPay = ({ show, handleClose }) => {
  //   const [tillShow, setTillShow] = useState(false);

  // const showTill = () => {
  //   setTillShow(true);
  // };
  // const closeTill = () => {
  //   setTillShow(false);
  // };
  const total = useSelector(state => state.checkoutTotal);
  const dispatch = useDispatch();
  
  useEffect(() => {
    _getCheckoutTotal(dispatch)
    console.log('checkoutTotal', total);
  }, [dispatch])


  const { t } = useTranslation();
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3 credit-main-box">
            <div className="pay-popup d-flex">
              <Form.Label column sm="6">
                <p>{t("total-amount")}</p>
              </Form.Label>
              <Col sm="6">
                <p>AED {localStorage.getItem('isLoyalCustomer') ? localStorage.getItem('final-amount') : total}</p>
              </Col>
            </div>
            <div className="pay-popup d-flex">
              <Form.Label column sm="9">
                <p>{t("tendered-reedem-amount")}</p>
              </Form.Label>
              <Col sm="3">
                <p>AED 0</p>
              </Col>
            </div>
            <div className="pay-popup d-flex">
              <Form.Label column sm="6">
                <p>{t("balance-due")}</p>
              </Form.Label>
              <Col sm="6">
                <p>AED 0 </p>
              </Col>
            </div>
            <div className="pay-popup d-flex">
              <Form.Label column sm="9">
                <p>{t("amount-to-be-paid")}</p>
              </Form.Label>
              <Col sm="3">
                <p>AED {localStorage.getItem('isLoyalCustomer') ? localStorage.getItem('final-amount') : total}</p>
              </Col>
            </div>
            <div className="amountpay-popup d-flex">
              <Form.Label column sm="6">
                <p>{t("amount-to-be-paid")}</p>
              </Form.Label>
              <Col sm="6" className="amount-paid">
                <input type="text" required />
              </Col>
            </div>

            <div className="col-12 text-center action-button">
              <button className="pay-now">
                <img src={CashPayment} alt="Cash" width="20px" />
                <Link to="/successful">{t("pay")}</Link>
              </button>
            </div>
          </Form.Group>
        </Modal.Body>
      </Modal>
      {/* <TillOpen tillShow={tillShow} closeTill={closeTill} /> */}
    </Fragment>
  );
};

export default CreditPay;

import React, { Fragment,useState } from "react";
import Visa from "../assets/images/transactions/visa-card.png";
import AmazonPay from "../assets/images/transactions/Amazon Pay.png";
import Master from "../assets/images/transactions/master.png";
import ApplePay from "../assets/images/transactions/apple-pay.png";
import GooglePay from "../assets/images/transactions/google-pay.png";

import Arrow from "../assets/images/gif/Arrow.gif";
import Machine from "../assets/images/gif/Machine.gif";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";


import { useTranslation } from 'react-i18next';
import CreditDebitOpen from "../popup/debitCredit";

const CardPayment = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  }
  return (
    <Fragment>
      <section className="payment-nav ">
        <Header pageName={"payment-modes"} pageTitle={t("select-payment-mode")} />
      </section>

      <Sidebar />
      <section className="main-payment">
        <div className="payment-main">
          <div className="container"></div>
        </div>

        <div className="payment-detils">
          <div className="container">
            <div className="payment-details-box d-flex">
              <div className="payment-modes-main">
                <img src={Visa} alt="cards" className="img-fluid" />
                <img src={AmazonPay} alt="cards" className="img-fluid" />
                <img src={Master} alt="cards" className="img-fluid" />
                <img src={ApplePay} alt="cards" className="img-fluid" />
                <img src={GooglePay} alt="cards" className="img-fluid" />
              </div>
              <img src={Arrow} alt="cards" className="img-fluid arrow-main" />
              <div className="scanner-box" onClick={() => setShow(true)}>
                <Link to=".">
                  <img
                    src={Machine}
                    alt="cards"
                    className="img-fluid scanner-main"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-box-main"></div>
      </section>
      <CreditDebitOpen show={show} handleClose={handleClose} />

    </Fragment>
  );
};

export default CardPayment;

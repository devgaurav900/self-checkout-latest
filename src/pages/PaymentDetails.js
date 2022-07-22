import React, { Fragment, useState} from "react";
import Gift from "../assets/images/payment-mode/LoyaltyCustomer.png";
import Credit from "../assets/images/payment-mode/payment-main.png";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header.js";
import LoyalProfileReceiptOpen from "../popup/loyal-profile";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LoyalCustomer from "../popup/LoyalCustmor";


const PaymentDetails = () => {
  const navigate = useNavigate();
  const [showOtpVerify, setOtpVerify] = useState(false);
  const[loyalCustomer, setLoyalCustomer] = useState();
  const { t } = useTranslation();

  const isNumberEntered = localStorage.getItem("userNumber");

  const showOtp = () => {
    if (isNumberEntered) {
      setOtpVerify(true);
    }else{
      setLoyalCustomer(true)
    }
    localStorage.setItem("isLoyalCustomer", "isLoyalCustomer");
  };
  const closeOtp = () => {
    setOtpVerify(false);
  };

  const redirectToRegular = () => {
    localStorage.removeItem("isLoyalCustomer", "isLoyalCustomer");
    navigate("/payments/cards");
  };




  return (
    <>
      <Fragment>
        <div className="payment-nav ">
          <Header
            pageName={"payment-modes"}
            pageTitle={t("select-payment-mode")}
          />
        </div>
        <Sidebar />
        <section className="main-payment">
          <div className="payment-main">
            <div className="container"></div>
          </div>
          <div className="payment-detils">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <div onClick={redirectToRegular}>
                    <div className="credit-cards">
                      <div className="payment-icons">
                        <img src={Credit} alt="icon" className="img-fluid" />
                      </div>
                      <h3>{t("credit-or-debit-card")}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="credit-cards" onClick={showOtp}>
                    <div className="payment-icons">
                      <img src={Gift} alt="icon" className="img-fluid" />
                    </div>
                    <h3>{t("loyalty-customer")}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="payment-deatil-box"></div>
          <LoyalProfileReceiptOpen
            showOtp={showOtpVerify}
            closeOtp={closeOtp}
          />
          <LoyalCustomer
            showLoyalCustmor={loyalCustomer}
            closeLoyalCustmor={setLoyalCustomer}
          />
        
        </section>
      </Fragment>
    </>
  );
};

export default PaymentDetails;

import React, { Fragment, useEffect } from "react";
import CreditDebitOpen from "../../popup/debitCredit";
import { Link } from "react-router-dom";
import {
  BflGroupLogo,
  GoBack,
  Visa,
  Discover,
  MasterCard,
  GiftCard,
  Wallet,
  Number1,
  UpDesignImg,
  PayDownImg,
  Status,
  Line,
} from "../../assets/images";
// import "./index.css";
import { useTranslation } from "react-i18next";
import { _getCheckoutTotal } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const PaymentSuccess = () => {
  let totalAmo = localStorage.getItem("totalamount");
  let payableamt = localStorage.getItem("payable");
  let payableamt2 = localStorage.getItem("payable2");
  let due = localStorage.getItem("dueamo");
  const dispatch = useDispatch();

  useEffect(() => {
    _getCheckoutTotal(dispatch);
    console.log("checkoutTotal", totalAmo);
  }, [dispatch]);

  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="payment-nav ">
        <Header
          pageName={"payment-successful"}
          pageTitle={t("successful-payment-tittle")}
        />
      </div>
      <Sidebar />

      <section className="main-payment-box">
        <div className="payment-success-main">
          <div className="success-box">
            <div className="row g-0 success-details">
              <div className="col-lg-4 success-details-left">
                  <h6>Total Amount</h6>
                </div>
              <div className="col-lg-4 success-details-center">
                <div className="AED"></div>
              </div>
              <div className="col-lg-4 success-details-right">
                <div className="pricedata"><h6>AED{totalAmo}</h6></div>
              </div>
            </div>

            <div>
            
             </div>

            <div className="row g-0 success-details">
              <div className="col-lg-4 success-details-left">
                <div className="No"><h6>No:{localStorage.getItem("card1")}</h6></div>
              </div>
              <div className="col-lg-4 success-details-center">
                <div className="visa-img-pay-done">
                  <img src={localStorage.getItem("card1type")} alt={"visa"} />
                </div>
              </div>
              <div className="col-lg-4 success-details-right">
              <div className="price2">
              <h6>{payableamt == 0 ? "" : "AED"}{payableamt == 0 ? "" : payableamt}</h6>
              </div>
              </div>
              
            </div>

            <div className="row g-0 success-details">
              <div className="col-lg-4 success-details-left">
                <div className="No1"><h6>{localStorage.getItem("card2")}</h6></div>
              </div>
              <div className="col-lg-4 success-details-center">
                <div className="master-img-pay-done">
                  <img src={localStorage.getItem("card2ype")} />
                </div>
              </div>
              <div className="col-lg-4 success-details-right">
              <div className="price2">
              <h6>{payableamt2 == 0 ? "" : "AED"} {payableamt2 == 0 ? "" : payableamt2}</h6>
              </div>
              </div>
            </div>

            <div className="row g-0 success-details">
              <div className="col-lg-4 success-details-left">
                <div className="AED2"><h6>Balance Due</h6></div>
              </div>
              <div className="col-lg-4 success-details-center">
                {/* <div className="due-price">AED{due}</div> */}
              </div>
              <div className="col-lg-4 success-details-right">
                <div className="Final-price"><h6>AED {totalAmo}</h6></div>
              </div>
            </div>
          </div>
          <div className="success-message">
            <Link to="/remove-tag">
              <div className="success-icon">
                <img className="check-mark-verified" src={Status} />
              </div>
            </Link>
            <h3>{t("your-payment-was-successful")}</h3>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PaymentSuccess;
function StatusTick() {
  return (
    <div className="BackGround-pay">
      <div className="StatusTick-pay">
        <img className="vector-pay" src={Status} />
      </div>
      <div className="article-list-pay">
        <span>Article List</span>
        <img className="line-1-pay" src={Line} />
      </div>
      <img className="number-1-pay" src={Status} />
      <div className="pay-list-pay">
        <span>Pay</span>
        {/* <img className="line-2-pay" src={Line} /> */}
      </div>
      {/* <img className="number-1-pay" src={Number2} /> */}
      <div className="pay-list-pay">
        <span className="remove-tag-pay">Remove Tag</span>
        {/* <img className="line-3-pay" src={Line2} /> */}
      </div>
      {/* <img className="number-1-pay" src={Number3} /> */}
      <div className="pay-list-receipt">
        <span>Recipt</span>
      </div>
    </div>
  );
}

import React,{useEffect} from "react";
import Fragment from 'react';
import Visa from "../assets/images/transactions/visa-card.png";
import { TiTick } from "react-icons/ti";
import Master from "../assets/images/transactions/master.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Sidebar from "../components/Sidebar";
import Header from '../components/Header.js';
import { useDispatch, useSelector } from 'react-redux';
import { _getCheckoutTotal } from "../redux/actions";

const PaymentSuccess = () => {
	const { t } = useTranslation();

  const total = useSelector(state => state.checkoutTotal);
  const dispatch = useDispatch();
  
  useEffect(() => {
    _getCheckoutTotal(dispatch)
    console.log('checkoutTotal', total);
  }, [dispatch]);
  
  let payableamt=localStorage.getItem("payable")

  return (
    <>
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
          <div className="sucess-box">
          <div className="row success-details">
            <div className="col-md-4 success-details-left">
              <h3>{t("redeem-amount")}</h3>
            </div>
            <div className="col-md-4 success-details-center">
              <h3></h3>
            </div>
            <div className="col-md-4 success-details-right">
              <h3>AED {localStorage.getItem('isLoyalCustomer') ? localStorage.getItem('final-amount') : total}</h3>
            </div>
          </div>

          <div className="row success-details">
            <div className="col-md-4 success-details-left">
              <h5>{t("No : 5421********8574")}</h5>
            </div>
            <div className="col-md-4 success-details-center">
              <img src={Visa} alt="visa" className="img-fluid" />
            </div>
            <div className="col-md-4 success-details-right">
            <h5>{payableamt}</h5>
            </div>
          </div>

          <div className="row success-details">
            <div className="col-md-4 success-details-left">
              <h5>{t("No : 5421********8574")}</h5>
            </div>
            <div className="col-md-4 success-details-center">
            <img src={Master} alt="cards" className="img-fluid" />
            </div>
            <div className="col-md-4 success-details-right">
              <h5>AED 0</h5>
            </div>
          </div>
          <div className="row success-details">
            <div className="col-md-4 success-details-left">
              <h4>{t("balance_due")}</h4>
            </div>
            <div className="col-md-4 success-details-center">
            </div>
            <div className="col-md-4 success-details-right">
              <h5>0.00</h5>
            </div>
          </div>
          </div>
          <div className="sucess-total">
          <div className="row success-details">
            <div className="col-md-4 success-details-left">
              <h4>{t("total-amount")}</h4>
            </div>
            <div className="col-md-4 success-details-center">
            </div>
            <div className="col-md-4 success-details-right">
              {/* <h4>AED {localStorage.getItem('isLoyalCustomer') ? localStorage.getItem('final-amount') : total}</h4> */}
              <h4>AED {localStorage.getItem('totalamount')}</h4>

            </div>
          </div>
          </div>
        </div>
        <div className="success-message">
          <Link to="/remove-tag">
            <div className="success-icon">
              <TiTick />
            </div>
          </Link>
          <h3>{t("your-payment-was-successful")}</h3>
        </div>
      </div>
      </section>
    </>
  );
};

export default PaymentSuccess;

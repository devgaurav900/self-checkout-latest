import React, { Fragment,useState } from "react";
import Ereceipt from '../assets/images/transactions/E-receipt-512 1.png';
import Glasses from '../assets/images/transactions/vr-glasses.png';
import Noreceipt from '../assets/images/transactions/no-receipt 1.png';
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from '../components/Header.js';
import Digitalrecipt from "../popup/Digital-recipt";
import { useTranslation } from 'react-i18next';


const Receipt = () => {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
    <Fragment>
        <section className="payment-nav ">
				<Header
					 pageName={"receipt"}
					pageTitle={t("print-your-receipt")}
				/>
        </section>

          <Sidebar />
        <section className="main-payment">
        <div class="payment-main">
          <div className="container"></div>
        </div>

        <div className="payment-detils">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3" onClick={() => setShow(true)}>
                <div className="credit-cards">
                  <div className="payment-icons">
                  <img src={Ereceipt} alt="icon" className="img-fluid"/>
                  </div>
                  <h3 >{t("digital-receipt")}</h3>
                </div>

              </div>
              <div className="col-lg-3">
              <Link to="/rating">
                <div className="credit-cards">
                  <div className="payment-icons">
                      <img src={Glasses} alt="icon" className="img-fluid"/>
                  </div>
                  <h3>{t("print-receipt")}</h3>
                </div>
                </Link>
              </div>
              <div className="col-lg-3">
              <Link to="/rating">
                <div className="credit-cards">
                  <div className="payment-icons">
                  <img src={Noreceipt} alt="icon" className="img-fluid"/>
                  </div>
                  <h3>{t("i-don’t-want-receipt")}</h3>
                  <p>( {t("save-tree-save-life")} )</p>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-deatil-box"></div>
        </section>
      <Digitalrecipt show={show} handleClose={handleClose} />
      </Fragment>
    </>
  )
}

export default Receipt
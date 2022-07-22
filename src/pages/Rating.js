import React, { Fragment } from "react";
import GraySmily from "../assets/images/main/gray-smily.png";
import GreenSmily from "../assets/images/main/green-smily.png";
import { useTranslation } from 'react-i18next';

import Header from '../components/Header.js';
import { Link } from "react-router-dom";

const RecieptRating = () => {
	const { t } = useTranslation();

  return (
    <Fragment>
      <section className="container-fluid">
      <div className="payment-nav ">
				<Header
					pageName={"rating"}
					pageTitle={t("rate-your-experience")}
				/>
        
        </div>
        <div className="main-section">
          <div className="feelings-contents">
            <h3>Happy with our Service?</h3>
            <div className="emogies-section">
              <img src={GreenSmily} alt="smily" className="m-4" />
              <img src={GraySmily} alt="smily" className="m-4" />
            </div>
            <h3>{t("what-did-you-like?")}</h3>
          </div>
          <div className="buttons-main">
            <button className="btn btn-light">{t("ambience")}</button>
            <button className="btn btn-light">{t("cost")}</button>
            <button className="btn btn-light">{t("user-interface")}</button>
          </div>
          <div className="submit-field">
            <Link to ="/">
            <button className="btn btn-warning submit-button">{t("submit")}</button>
            </Link>
            <button className="btn btn-warning skip-button">{t("skip")}</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default RecieptRating;

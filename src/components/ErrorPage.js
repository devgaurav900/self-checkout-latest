import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="error-main">
        <div className="aside">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
            alt="404 Image"
            className="img-fluid"
          />
        </div>
        <div className="main">
          <h1>{t("sorry")}</h1>
          <p>
            {t("404-error-message1")}
            <em>{t("404-error-message2")}</em>
          </p>
          <Link to="/">
            <button>{t("go-back-home")}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

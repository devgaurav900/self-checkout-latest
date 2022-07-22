import React, { useState, useEffect } from "react";
import { Logo, BflGroupLogo } from "../assets/images";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header({ pageName, pageTitle }) {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const pagesWithTwoLogos = [
    "checkout",
    "payment-successful",
    "remove-tag-red",
    "remove-tag-green",
    "receipt",
    "rating",
  ];

  const pagesWithOneLogo = [
    "payment-modes",
    "credit-debit",
    "gift-voucher",
    "digital-wallet",
  ];

  const navigate = useNavigate();

  const renderLogoOrBackButton = () => {
    if (pagesWithTwoLogos.includes(pageName)) {
      return <img src={Logo} alt="SunTech Global Logo" />;
    } else if (pagesWithOneLogo.includes(pageName)) {
      return (
        <button onClick={() => navigate("/checkout")}>
          <BsFillCaretLeftFill />
          {t("go-back")}
        </button>
      );
    } else {
      console(
        "Man, pass a correct 'pageName' prop to Header. The pageName prop value should be an element of 'pagesWithTwoLogos' or 'pagesWithOneLogo'."
      );
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("userName");
    setUsername(JSON.parse(user));
  }, []);

  return (
    <header>
      <div className="Header container-fluid">
        <div className="row navbar-main">
          <div className="col-md-3 text-left">{renderLogoOrBackButton()}</div>
          <div className="col-md-6 text-center d-flex">
            <h1>{pageTitle}</h1>
            <div className="customer-details">
              <p className="customer-name">Name :- {username}</p>
              <p>
                {t("date")} :-{new Date().toISOString().slice(0, -14)}
              </p>
            </div>
          </div>
          <div className="col-md-3 text-right">
            <img src={BflGroupLogo} alt="BFL Group Logo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BflGroupLogo, Cart, ClothStore, Logo } from "../assets/images";
import { useTranslation } from "react-i18next";
// import  QrReader  from "react-qr-reader";

const DropItems = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("userName");
    setUsername(JSON.parse(user));
  }, []);

  const [inputShow, setInputShow] = useState("");
  const navigate = useNavigate();

  const onBarcodeChange = () => {
    if (inputShow === " ") {
      alert("Please scan Your Item !!!");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <>
      <section className="drop-item-main container-fluid">
        <div className="item-main">
          <div className="row">
            <div className="col-sm-8 bfl-main-logo d-flex">
              <div className="customer-details">
                <p className="customer-name">Name :- {username}</p>
                <p>
                  {t("date")} :- {new Date().toISOString().slice(0, -14)}
                </p>
              </div>
              <img src={BflGroupLogo} alt="" className="img-fluid" />
            </div>
            <div className="col-sm-4">
              <div className="logo-main">
                <img src={Logo} alt="bfl logo" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row items-main ">
            <div className="col-md-6">
              <div className="cart-main">
                <img src={Cart} alt="logo" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="cloth-main">
                <img src={ClothStore} alt="cloth-main" className="img-fluid" />
                <input
                  id="barcode-value"
                  type="text"
                  placeholder={t(" ")}
                  className="mb-2"
                  onChange={onBarcodeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DropItems;

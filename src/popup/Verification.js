import React, { Fragment, useState } from "react";
import { Button, Modal, Image, Form, Row } from "react-bootstrap";
import Otp from "../assets/images/payment-mode/otp.png";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../assets/images";
// import Pay from "./Payment";
import { useTranslation } from "react-i18next";

const Verification = ({ show, handleClose }) => {
  // const [showPay, setShowPay] = useState(false);
  const { t } = useTranslation();

  // const closePay = () => {
  //   setShowPay(false);
  // };

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verifyOtp = async (e) => {
    e.preventDefault();
    if (otp === "" || otp === null) {
      alert("Please Enter OTP !!");
    } else {
      navigate("/drop-your-items");
    }
  };

  const number = localStorage.getItem("userNumber");

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3 verify-main-box" type="form">
            <Form.Label column sm="12">
              <img src={Otp} alt="opt" className="img-fluid" />
            </Form.Label>
            <Form.Label column sm="12" className="mt-4">
              {t("otp-verification")}
            </Form.Label>
            <Form.Label column sm="12" className="mt-4">
              {t("enter-otp")} <span>{number}</span>
            </Form.Label>
            <div className="enter-otp">
              <Form.Label
                column
                sm="10"
                className="mt-4 justify-content-center"
              >
                <Form.Control
                  type="otp"
                  placeholder="Enter OTP"
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Form.Label>
            </div>
            <p>
              {t("otp-not-received")}{" "}
              <Link to="#">
                <b>{t("resend")}</b>
              </Link>
            </p>
            <div className="button-section-main">
              <Button type="submit" variant="primary" onClick={verifyOtp}>
                {t("submit")}
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
      </Modal>
      {/* <Pay show={showPay} handleClose={closePay} /> */}
    </Fragment>
  );
};

export default Verification;

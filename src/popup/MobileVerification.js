import React, { useState, Fragment } from "react";
import { Link} from "react-router-dom";
import { Form, Alert, Button, Modal, Image} from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Logo } from "../assets/images";
import { GoArrowRight } from "react-icons/go";

import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";
import { useTranslation } from "react-i18next";
import Verification from "./Verification";

const PhoneSignUp = ({ MobileNumber, closeVerification }) => {
  const { t } = useTranslation();

  const [number, setNumber] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const closeOtpVerification = () => {
    setShowVerification(false);
  };


 localStorage.setItem('userNumber', number)


  const [error, setError] = useState("");
  const { setUpRecaptha } = useUserAuth();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined) {
      setError("Please enter a valid phone number!");
    } else {
      await setUpRecaptha(number);
      setShowVerification(true);
    }
  };
  


  return (
    <>
      <Fragment>
        <Modal show={MobileNumber} onHide={closeVerification}>
          <Modal.Header closeButton>
            <Image src={Logo} alt="suntech-logo" />
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <p className="mobile-number">
                {t("loyalty-customer-number")}
              </p>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={getOtp}>
              <Form.Group
                className="mb-3 mobile-number"
                controlId="formBasicEmail"
              >
                <PhoneInput
                  defaultCountry="IN"
                  value={number}
                  onChange={setNumber}
                  placeholder="Enter Phone Number"
                />
                <div id="recaptcha-container"></div>
              </Form.Group>
              <div className="button-right">
                &nbsp;
                <Button type="submit" variant="primary" >
                  Continue
                  <GoArrowRight />
                </Button>
                <Link to="/drop-your-items">
                  <Button variant="secondary">Skip</Button>
                </Link>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        <Verification
          show={showVerification}
          handleClose={closeOtpVerification}
        />
      </Fragment>
    </>
  );
};

export default PhoneSignUp;

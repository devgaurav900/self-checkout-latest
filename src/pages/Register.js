import React, { useState } from "react";
import {
  Rectangle30,
  BflGroupLogo,
  Girl,
  Logo,
  Vector6,
  Young,
} from "../assets/images";
import Computer from "../assets/images/gif/computer.gif";
import { BsFillCaretDownFill } from "react-icons/bs";
import RegisterOpen from '../popup/RegisterOpen';
import TillOption from "../popup/TillOptions";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  }
  const [showTillOption, setTillOption] = useState(false);
  const closeTillOption = () => {
    setTillOption(false)
  }

  return (
    <>
      <section className="register">
        <div className="row g-0">
          <div className="col-lg-8">
            <div className="register-main">
              <div className="register-image d-flex">
                <img
                  src={Rectangle30}
                  alt="Rectangle"
                  className="img-fluid bg-main"
                />
                <img src={Girl} alt="girl" className="img-fluid logo-girl" />
                <BsFillCaretDownFill />
                <img src={Logo} alt="" className="img-fluid logo-main" />
              </div>
              <div className="scanner-main d-flex">
                <img src={Young} alt="young" className="img-fluid young-main" />
                <img
                  src={Computer}
                  alt="scanner"
                  className="img-fluid scanner"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="register-box">
              <img
                src={BflGroupLogo}
                alt="logo"
                className="img-fluid bfl-logo"
              />
              <div className="register-box-buttons">
               
                <button type="button" >Start of Day</button>
                <button type="button" className="register-open" onClick={() => setShow(true)}>Register Open</button>
                <button type="button" className="register-open" onClick={() => setTillOption(true)}>Till Options</button>
                <button type="button">Register Close</button>
                <button type="button">End of Day</button>
              </div>
              <img
                src={Vector6}
                alt="vector"
                className="img-fluid vector-main"
              />
            </div>
          </div>
        </div>
      </section>
      <RegisterOpen show={show} handleClose={handleClose} />
      <TillOption show={showTillOption} handleClose={closeTillOption}/>
    </>
  );
};

export default Register;

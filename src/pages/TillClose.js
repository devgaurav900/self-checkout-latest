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
import Logout from "../popup/Logout";
import TillOptions from "../popup/TillOption";

const Till = () => {

  const [show, setShow] = useState(false); 

  const [showTillOption, setTillOption] = useState(false);
  const closeTillOption = () => {
    setTillOption(false)
  }
  
  return (
    <>
      <section className="till-close">
        <div className="row g-0">
          <div className="col-lg-8">
            <div className="register-main">
              <div className="register-image d-flex">
                <img
                  src={Rectangle30}
                  alt="Rectangle"
                  className="img-fluid bg-main"
                />
                <img src={Girl} alt="girl" className="img-fluid logo-girl"  />
                <BsFillCaretDownFill onClick={() => setShow(!show)} />
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
            <div className="till-box">
              <img
                src={BflGroupLogo}
                alt="logo"
                className="img-fluid bfl-logo"
              />
              <div className="till-box-buttons">
              <button type="button" >Start of Day</button>
                <button type="button">Register Open</button>
                <button type="button" className="till-close" onClick={() => setTillOption(true)}>Till Options</button>
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
      {show && <Logout/>}
      <TillOptions show={showTillOption} handleClose={closeTillOption}/>
    </>
  );
};

export default Till;

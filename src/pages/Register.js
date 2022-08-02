import React, { useState, useEffect } from "react";
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
import RegisterOpen from "../popup/RegisterOpen";
import TillOption from "../popup/TillOptions";
import {
  _storeOpen,
  _storeClose,
  _registerOpen,
  _registerClose,
} from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const Register = () => {
  const [show, setShow] = useState(false);
  const info = useSelector(state => state.info);
  const handleClose = () => {
    setShow(false);
  };
  const [showTillOption, setTillOption] = useState(false);
  const closeTillOption = () => {
    setTillOption(false);
  };
  const dispatch = useDispatch();

  const getRegisterId = () => {
    console.log('registerInfo', info.registerInfo)
    if (info.registerInfo) return info.registerInfo.register.registerId;
    else return 104;
  }

  const triggerAbility = (propriety, action) => {
    if (action.toLowerCase() === 'open') return  propriety === 'false' && propriety !== undefined;
    else if (action.toLowerCase() === 'close') return propriety === 'true' || propriety === undefined;
    else console.log("action argument should be either 'open' or 'close")
  }

  useEffect(()=> {

  })

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
              <div className ="scanner-main d-flex">
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
                <button type="button" onClick={
                  () => {
                    console.log('before', info.storeInfo.status)
                    _storeOpen(dispatch);
                    console.log('after', info.storeInfo.status)
                  }
                } disabled={triggerAbility(info.storeInfo.status, 'open')}>Start of Day {info.storeInfo.status}</button>
                <button
                  type="button"
                  className="register-open"
                  onClick={() => {
                    _registerOpen(dispatch);
                    setShow(true);
                  }}
                  disabled={!triggerAbility(info.registerInfo.status, 'open')}
                >
                  Register Open
                </button>
                <button
                  type="button"
                  className="register-open"
                  onClick={() => {
                    setTillOption(true);
                  }}
                >
                  Till Options
                </button>
                <button type="button" onClick={() => {
                  _registerClose(dispatch);
                }}
                disabled={!triggerAbility(info.registerInfo.status, 'close')}>Register Close</button>
                <button type="button" onClick={ () => {
                    console.log('before', info.storeInfo.status)
                      _storeClose(dispatch);
                      console.log('after', info.storeInfo.status)
                }} disabled={triggerAbility(info.storeInfo.status, 'close')}>End of Day {info.storeInfo.status}</button>
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
      <TillOption show={showTillOption} handleClose={closeTillOption} triggerAbility={triggerAbility}/>
    </>
  );
};

export default Register;

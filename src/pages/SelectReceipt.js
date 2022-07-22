import React, { Fragment } from "react";
import GraySmily from "../assets/images/main/gray-smily.png";
import GreenSmily from "../assets/images/main/green-smily.png";

import Header from '../components/Header.js';

const SelectReceipt = () => {
  return (
    <Fragment>
      <section className="container-fluid">
				<Header
					pageName={"receipt"}
					pageTitle={"Print Your Receipt"}
				/>
        <div className="main-section">
          <div className="feelings-contents">
            <h3>Happy with our Service?</h3>
            <div className="emogies-section">
              <img src={GreenSmily} alt="smily" className="m-4" />
              <img src={GraySmily} alt="smily" className="m-4" />
            </div>
            <h3>What did you like?</h3>
          </div>
          <div className="buttons-main">
            <button className="btn btn-light">Ambience</button>
            <button className="btn btn-light">Cost</button>
            <button className="btn btn-light">User Interface</button>
          </div>
          <div className="submit-field">
            <button className="btn btn-warning submit-button">Submit</button>
            <button className="btn btn-warning skip-button">Skip</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SelectReceipt;
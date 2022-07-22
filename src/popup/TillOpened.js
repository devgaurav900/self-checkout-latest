import React, { Fragment } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import { Logo } from "../assets/images";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const TillOpened = ({ tillOpenedShow, closeTillOpened }) => {
  return (
    <Fragment>
      <Modal show={tillOpenedShow} onHide={closeTillOpened}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <div className="register-heading">
            <p>TILL OPEN</p>
          </div>
          <div className="till-closed">
            <h3>Till 101 is Opened</h3>
          </div>
          <div className="button-section-tillopened">
            <Link to="/">
              <Button variant="warning">
                Continue <GoArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default TillOpened;

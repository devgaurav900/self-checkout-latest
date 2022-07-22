import React, {useState, Fragment } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import { Logo } from "../assets/images";
import TillClose from "../popup/TillClose";




const TillOptions = ({ show, handleClose }) => {
  

  const [tillClose, settillClose] = useState(false);

  const closePay = () => {
    settillClose(false);
  };

 

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
            <div className="button-till-section">
              <Button type="button" className="till-button-box">
              Till Open
              </Button>
              <Button type="button" className="till-button" onClick={() => settillClose(true)} >
              Till Close
              </Button>
              <Button type="button" className="till-button-box">
              Till Reconcile
              </Button>
            </div>
        </Modal.Body>
      </Modal>
      <TillClose show={tillClose} closeTill={closePay} />
    </Fragment>
  );
};

export default TillOptions;

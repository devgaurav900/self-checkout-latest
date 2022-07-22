import React, {useState, Fragment } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import { Logo } from "../assets/images";
import TillOpen from "../popup/TillOpen";
import TillClose from "../popup/TillClose";




const TillOption = ({ show, handleClose }) => {
  

  const [tillShow, setTillShow] = useState(false);

  const closeTill = () => {
    setTillShow(false);
  };

  const [pay, setPay] = useState(false);

  const closePay = () => {
    setPay(false);
  };

 

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
            <div className="button-till-section">
              <Button type="button" className="till-button" onClick={() => setTillShow(true)}>
              Till Open
              </Button>
              <Button type="button" className="till-button" onClick={() => setPay(true)} >
              Till Close
              </Button>
              <Button type="button" className="till-button">
              Till Reconcile
              </Button>
            </div>
        </Modal.Body>
      </Modal>
      <TillOpen tillShow={tillShow} closeTill={closeTill} />
      <TillClose show={pay} closeTill={closePay} />
    </Fragment>
  );
};

export default TillOption;

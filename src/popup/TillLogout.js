import React, { Fragment} from "react";
import { Button, Modal, Image} from "react-bootstrap";
import { Logo } from "../assets/images";

const TillLogout = ({tillShow, closeOtp}) => {
  
  return (
    <Fragment>
      <Modal show={tillShow} onHide={closeOtp}>
      <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
        <div className="register-heading">
            <p>Till Close</p>
          </div>
          <div className="till-closed">
          <h3>Till 101 is Closed</h3>
          </div>
          <div className="button-section-till">
           <Button variant="warning" onClick={() => window.location.reload()}>
              Ok
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default TillLogout;

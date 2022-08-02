import React, {useState, Fragment } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import { Logo } from "../assets/images";
import TillOpen from "../popup/TillOpen";
import TillClose from "../popup/TillClose";
import {
  _tillOpen,
  _tillClose,
} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const TillOption = ({ show, handleClose, triggerAbility}) => {
  const [tillShow, setTillShow] = useState(false);
  const dispatch = useDispatch();
  const tillInfo = useSelector(state => state.info.tillInfo);
  
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
              <Button type="button" className="till-button" onClick={() => {
                _tillOpen(dispatch)
                setTillShow(true);}}
                disabled={triggerAbility(tillInfo.status, 'open')}>
              Till Open
              </Button>
              <Button type="button" className="till-button" onClick={() => {
                _tillClose(dispatch)
                setPay(true);}} 
                disabled={triggerAbility(tillInfo.status, 'close')}>
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

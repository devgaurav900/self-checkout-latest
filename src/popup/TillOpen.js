import React, { Fragment, useState } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
import TillOpened from "../popup/TillOpened";
import { _tillOpen } from "../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";


const TillOpen = ({ tillShow, closeTill }) => {
  const [currentDate] = useState(new Date().toISOString().slice(0, -14));

  const [tillOpened, setTillopened] = useState(false);

  const tillOpenedClose = () => {
    setTillopened(false);
  };


  const [tillShowId, setTillShowId] = useState(false);
  const dispatch = useDispatch();
  const tillData = useSelector((state) => state.info.tillInfo);
  console.log(tillData);

  const submitTillOpen = () => {
    const actualTillId = localStorage.setItem("actual-till-id");
    console.log(actualTillId)
    const enteredTillId = localStorage.getItem("entered-till-id");
    if (actualTillId === enteredTillId) {
      _tillOpen(dispatch);
      setTillShowId(true);
    } else {
      alert("Please Enter Valid Till Id ~");
    }
  };

  return (
    <Fragment>
      <Modal show={tillShow} onHide={closeTill}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <div className="register-heading">
            <p>TILL OPEN</p>
          </div>
          <Form.Group as={Row} className="mb-3 register-main-box">
            <Form.Label column sm="4">
              Enter Till Id
            </Form.Label>
            <Col sm="8">
              <Form.Control type="number" placeholder="8709" onChange={(e) =>
                  localStorage.setItem("entered-till-id", e.target.value)}/>
            </Col>
            <Form.Label column sm="4" className="mt-4">
              Enter Till Date
            </Form.Label>
            <Col sm="8" className="mt-4">
              <Form.Control
                id="till-date"
                type="date"
                min={currentDate}
                max={currentDate}
                value={currentDate}
              />
            </Col>
          </Form.Group>
          <div className="button-section">
            <Button variant="warning" onClick={() => setTillopened(true)}>
              Continue <GoArrowRight size={20} />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <TillOpened
        tillOpenedShow={tillOpened}
        closeTillOpened={tillOpenedClose}
      />
    </Fragment>
  );
};

export default TillOpen;

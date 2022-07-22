import React, { Fragment, useEffect, useState } from "react";
import { Button, Modal, Image, } from "react-bootstrap";
import { Logo, } from "../assets/images";
import Gold from "../assets/images/payment-mode/gold.png";
import { useDispatch, useSelector } from "react-redux";
import { _getCheckoutTotal } from "../redux/actions";

import "./index.css";
import RedeemPoint from "./balance-split";

const LoyalProfileReceiptOpen = ({ showOtp, closeOtp }) => {
  const [accumulatedPoint, setAccumulatedPoint] = useState(1000);
  let totalreedem = accumulatedPoint / 10;
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  // const handleOpen = () => {
  //   setShow(true);
  // };

  const [dueamo, setDueamo] = useState(totalreedem);
  const [payable, setPayable] = useState();
  localStorage.setItem("redeemPoint", payable);
  const TotalDueAmount = (e) => {
    e.preventDefault();
    if (payable > dueamo) {
      alert("Enter valid Redeem Point");
    } else {
      if (dueamo > 0) {
        setDueamo(dueamo - payable);
        setAccumulatedPoint((dueamo - payable) * 10);
        setShow(true);
      }
    }
  };

  const total = useSelector((state) => state.checkoutTotal);

  localStorage.setItem('total-price', total)

  const dispatch = useDispatch();

  useEffect(() => {
    _getCheckoutTotal(dispatch);
  }, [dispatch]);

  // useEffect(() => {
  //   if (dueamo === 0) {
  //     navigate("/paymentsuccess");
  //   }
  // }, [dueamo]);
  // console.log("total",totalreedem);
  // console.log("due",dueamo);
  // console.log(payable);

  return (
    <Fragment>
      <Modal show={showOtp} onHide={closeOtp}>
      <Modal.Header closeButton>
         
         <Image src={Logo} alt="suntech-logo" />
         
       </Modal.Header>
       <Modal.Body>
           <form   style={{marginLeft:'30px'}}>
         <div className="loyal-user">
               <div className="p-name" style={{marginTop: "10px", fontWeight: "bold"}}>
                   <label >Person name :- </label>
               <div style={{ position:'absolute' ,marginTop:'-30px',marginLeft:'290px',}}> <span>{"Kunal"}</span></div>
               <div style={{ position:'absolute' ,marginTop:'-30px',marginLeft:'380px', color:"green"}}> <span>{"Active" }</span></div>
               </div>
               <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "28px",border: "1px solid #333333"}}> </div>
               <div className="p-name"style={{marginTop: "10px",fontWeight: "bold"}}><label>Membership Type :- </label>
               <div style={{ position:'absolute' ,marginTop:'-35px',marginLeft:'300px',}}><img style={{width:"20px"}}src={Gold} alt="" /></div>
               </div>
               <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "63px",border: "1px solid #333333"}}> </div>
               <div className="p-name" style={{marginTop: "15px",fontWeight: "bold"}}><label >Accumulated Point :- </label>
               <div style={{ position:'absolute' ,marginTop:'-40px',marginLeft:'300px',}}> <span>{accumulatedPoint}</span></div>
               </div>
               
               <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "95px",border: "1px solid #333333"}}> </div>
               <div className="p-name" style={{marginTop: "16px",fontWeight: "bold"}}><label >Equivalent Amount :- </label>
               <div style={{ position:'absolute' ,marginTop:'-35px',marginLeft:'300px', }}> <span> {totalreedem}   {"AED"}</span></div>
               </div>
               
               <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "138px",border: "1px solid #333333"}}> </div>
               <div className="p-name" style={{marginTop: "18px",fontWeight: "bold"}}><label >Enter Amount to Reedem:- </label>
               <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'290px'}} required> <input onChange={(e)=>setPayable(e.target.value)} placeholder={dueamo} style={{width:"150px", backgroundColor:"#F2F2F2" ,border:"none", outline:"none"}} type="number" />  </div>
               </div>
               
               <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "196px",border: "1px solid #333333"}}> </div>
               <div style={{marginTop: "30px",textAlign:'center'}}><span >Would you like to reedem points now</span></div>
         </div>
       
        
           </form>
           <Button  type="submit" className="btn btn-primary" data-dismiss="modal" style={{width:'80px', marginTop: "30px",marginRight:"71px",marginLeft:"128px",marginBottom:"30px"}} onClick={TotalDueAmount}>Yes</Button>
          <a href="/payment"><button type="button" className="btn btn-primary" data-dismiss="modal" style={{width:'80px',marginTop: "1px"}}>No</button></a>
         
           {/* <button onClick={submitHandler}>get</button> */}
       </Modal.Body>
      </Modal>

      <RedeemPoint show={show} handleClose={handleClose} />
    </Fragment>
  );
};

export default LoyalProfileReceiptOpen;

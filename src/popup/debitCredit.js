import React, {  Fragment } from "react";
import { Button, Modal, Image, } from "react-bootstrap";
import { Logo , Visa,Mastercard} from "../assets/images";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { _getCheckoutTotal } from "../redux/actions";
import { useTranslation } from 'react-i18next';


const CreditDebitOpen = ({ show, handleClose,}) => {

  // const total = useSelector(state => state.checkoutTotal);
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   _getCheckoutTotal(dispatch)
  //   console.log('checkoutTotal', total);
  // }, [dispatch])
  
  let totalAmo = localStorage.getItem('total-price')
  localStorage.setItem("totalamount",totalAmo);
  
  const [dataShow, setFromShow] = useState(false);
  const [showReceipt,setShowReceipt] = useState(false)
  const [dueamot,setDueamo]=useState(totalAmo);
  const [flag,setFlag]=useState(true);
  const [check,setCheck]=useState(0);

  const[payable,setPayable]=useState(0);
  const[paid,setPaid]=useState();
  const[paid2,setPaid2]=useState();
 
  
  const showMobile = () => {
    setFromShow(true);
  };
 
  const closeCreditDebit = () => {
    setFromShow(false);
  };

  const navigate =useNavigate();

  const TotalDueAmount =()=>{
    setCheck(check+1);
    
    if(payable>dueamot){
        alert("Enter valid payable amount")
        navigate('/credit');
    }
    else
    {
      if(dueamot>0){
        const asd=totalAmo-payable;
        localStorage.setItem("card1","2205********7634");
        localStorage.setItem("payable2",asd);
        localStorage.setItem("card1type",Visa);
        localStorage.setItem("payable",payable);
      
      
        setDueamo(dueamot-payable);
        if(check<2){
          let paidamount =payable;
          setPaid(paidamount)
        }
        if(check>=2){
          let paidamount2 =payable;
          setPaid(paidamount2)
        }
        setFlag(false);
        
        setTimeout(() => {
          setFlag(true);
        }, 5000);
       
        localStorage.setItem("card2","8576********8914");
        localStorage.setItem("card2ype",Mastercard);
        
    }
}
}
useEffect(()=>{
    if(dueamot===0){
      // console.log("useEffect wala check=",check);
      if(check<2){
        localStorage.removeItem('card2');
        localStorage.removeItem("card2ype")
      }
      setShowReceipt(true);
      
        // navigate('/successful');
        navigate('/paymentsuccess');
        
    }
    
    
},[dueamot])

// console.log("total",totalAmo);
// console.log("due",dueamot);
// console.log("show",show);
// console.log("payable",payable);
localStorage.setItem("dueamo",dueamot);


const dispatch = useDispatch();
  
useEffect(() => {
  _getCheckoutTotal(dispatch)
  console.log('checkoutTotal', totalAmo);
}, [dispatch])


const { t } = useTranslation();

  return (
    <Fragment>
      
        {
        flag ?
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />          
        </Modal.Header>
        <Modal.Body>
            <form style={{marginLeft:'30px'}} >
          <div className="loyal-user">
                <div className="p-name" style={{marginTop: "30px", fontWeight: "bold"}}>
                    <label >Total Amount</label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <span>{ totalAmo }</span></div>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'400px', }}> <span>{"AED"}</span></div>
                </div>
                <div className="p-name"style={{marginTop: "30px",fontWeight: "bold"}}><label>     { check>0 ?
                 <div>
                  <span>Tendar Amount</span>
                  <span style={{marginLeft:"182px"}}>{paid}</span>
                  <span style={{marginLeft:"74px"}}>AED</span>
                  </div> :''   }
                  </label></div>
                {/* <div className="p-name"style={{marginTop: "30px",fontWeight: "bold"}}><label>Tendered Amount     {payable==0?'':payable}</label></div> */}
                <div style={{position:"absolute",width: "450px",height: "-2px",left: "25px",top: "72px",border: "1px solid #333333"}}> </div>
                <div className="p-name"style={{marginTop: "30px",fontWeight: "bold"}}><label>Balance Due</label>
               
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <span>{dueamot }</span></div>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'400px', }}> <span>{"AED"}</span></div>
                </div>
                <div style={{position:"absolute",width: "450px",height: "-2px",left: "25px",top: "120px",border: "1px solid #333333"}}> </div>

                <div className="p-name" style={{marginTop: "30px",fontWeight: "bold"}}><label >Amount to be Paid :- </label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <input type="number" placeholder={dueamot}   onChange={(e)=>setPayable(e.target.value)} style={{width:"100px" } }/></div>
                </div>
                <div className="button-section">
                </div>
               
          </div>
          
            </form>
            <Button  type="submit" className="btn btn-primary" data-dismiss="modal" required  style={{width:'80px', marginTop: "80px",marginRight:"80px",marginLeft:"130px" }  } onClick={TotalDueAmount}>Pay
                </Button>
            <a href="/payments"><Button type="button" className="btn btn-primary" data-dismiss="modal" style={{width:'80px',marginTop: "95px",marginBottom: "20px"}}>No</Button></a>

        </Modal.Body>
      </Modal>

        : null}
        
      
      
    </Fragment>
  );
};

export default CreditDebitOpen;
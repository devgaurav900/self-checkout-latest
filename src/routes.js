import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Checkout from "./pages/checkout";
import DropItems from "./pages/DropItems.js";
import CardPayment from "./pages/CardPayment.js";
import PaymentDetails from "./pages/PaymentDetails.js";
import GiftVoucher from "./pages/GiftVoucher.js";
import DigitalWallet from "./pages/DigitalWallet.js";
import Receipt from "./pages/PaymentReceipt.js";
// import PaymentSuccess from "./pages/PaymentSuccess.js";
import PaymentSuccess from "./pages/payment-success/payment-success"
import RemoveTag from "./pages/RemoveTag.js";
import RemoveBox from "./pages/RemoveBox.js";
import ReceiptRating from "./pages/Rating.js";
import Logout from "./popup/Logout.js";
import Till from "./pages/TillClose.js";
import ErrorPage from "./components/ErrorPage.js";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import PhoneSignUp from "./popup/MobileVerification.js";

const AppRoute = () => {
  return (
    <Fragment>
      <UserAuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/till" element={<Till />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/drop-your-items" element={<DropItems />} />
            <Route path="/payments/cards" element={<CardPayment />} />
            <Route path="/payments" element={<PaymentDetails />} />
            <Route path="/payments/gift-voucher" element={<GiftVoucher />} />
            <Route
              path="/payments/digital-Wallets"
              element={<DigitalWallet />}
            />
            <Route path="/receipt" element={<Receipt />} />
            {/* <Route path="/successful" element={<PaymentSuccess />} /> */}

            <Route exact path="/paymentsuccess" element={<PaymentSuccess/>} />

            <Route path="/remove-tag" element={<RemoveTag />} />
            <Route path="/remove-green" element={<RemoveBox />} />
            <Route path="/rating" element={<ReceiptRating />} />
            <Route path="/logout" element={<Logout />} />
            <Route path= "/mobile" element ={<PhoneSignUp/>}/>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </Fragment>
  );
};

export default AppRoute;

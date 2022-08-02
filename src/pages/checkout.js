import React, { useEffect, Fragment, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header.js";
import ArticlesTitleBar from "../components/ArticlesTitleBar.js";
import Article from "../components/Article.js";
import PaymentBar from "../components/PaymentBar.js";
import { getArticles } from "../api/article.js";
import { getTransactions } from "../api/transaction";
import { useIdleTimer } from "react-idle-timer";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { _setCheckoutTotal } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { _getCheckoutArticle } from "../redux/actions";

const Checkout = () => {
  const [transactions, setTransactions] = useState([]);
  const [getBarcode, setGetBarcode] = useState("");
  const [totalSalePrice, setTotalSalePrice] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);
  const [totalTaxValue, setTotalTaxValue] = useState(0);
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [isArticles, setIsArticles] = useState(false);
  const [isTransactions, setIsTransactions] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const checkoutArticles = useSelector(state => state.checkoutArticles);

  const removeItem = () => {
    if(counter - 1 === 0) {
      navigate('/drop-your-items')
    }
    setCounter(counter - 1);
    computeTotalSalePrice();
    computeTotalDiscount();
    computeTotalTaxes();
  };


  const computeTotalSalePrice = async () => {
    let totalSalePrice = 0;
    const totalSaltePriceArray = await checkoutArticles
      ? [...Array(counter)].forEach(() => {
          totalSalePrice += salePrice(
            checkoutArticles.priceList.price,
          );
          setTotalSalePrice(totalSalePrice);
        })
      : '';
      console.log('totalSalePriceArray:', Array(counter));
      console.log('price:', checkoutArticles.priceList.price)
    _setCheckoutTotal(dispatch, totalSalePrice);
  };

  const computeTotalDiscount = () => {
    let totalDiscount = 0;
    checkoutArticles
      ? [...Array(counter)].forEach(() => {
          totalDiscount += saleDiscount(checkoutArticles.priceList.price);
        })
      : (totalDiscount = 0);
      setDiscountTotal(totalDiscount);
  };

  const computeTotalTaxes = () => {
    let totalTax = 0;
    checkoutArticles
      ? [...Array(counter)].forEach(() => {
          totalTax += saleTaxes(checkoutArticles.priceList.price);
        })
      : (totalTax = 0);
    setTotalTaxValue(totalTax);
  };

  useEffect(() => {
    _getCheckoutArticle(dispatch);
  }, [dispatch]);

  // Bar Code Scanner
  const onBarcodeChange = async (event) => {
    const newValue = event.target.value;
    setGetBarcode(newValue); 
    if (newValue == checkoutArticles.id) {
      setCounter(counter + 1);
      await computeTotalSalePrice()
    };
  };

  const salePrice = (originalPrice, discount=process.env.REACT_APP_DEFAULT_DISCOUNT, tax=process.env.REACT_APP_DEFAULT_TAX) => {
    const discountValue = (originalPrice * discount) / 100;
    const discountedPrice = originalPrice - discountValue;
    const gstValue = (discountedPrice * tax) / 100;
    const result_data = discountedPrice + gstValue;
    return result_data;
  };

  const saleDiscount = (originalPrice, discount=process.env.REACT_APP_DEFAULT_DISCOUNT) => {
    return (originalPrice * discount) / 100;
  };

  const saleTaxes = (originalPrice, discount=process.env.REACT_APP_DEFAULT_DISCOUNT, tax=process.env.REACT_APP_DEFAULT_TAX) => {
    const discountValue = (originalPrice * discount) / 100;
    const discountedPrice = originalPrice - discountValue;
    const gstValue = (discountedPrice * tax) / 100;
    return gstValue;
  };

  const renderArticles = () => {
    if (checkoutArticles) {
      const articlesToDisplay = [];
      for(let index = 0 ; index < counter; index++) {
        articlesToDisplay.push(
          <li key={checkoutArticles.id}>
            <Article
              onPress={() => removeItem(index)}
              article={checkoutArticles}
              salePrice={salePrice(checkoutArticles.priceList.price)}
            />
          </li>)
      }
      return articlesToDisplay;
     } else {
      return <p>{t("loading")}</p>
     }
  };

  useEffect(() => { 
    const compute = async () => {
    await computeTotalSalePrice();
    await computeTotalDiscount();
    await computeTotalTaxes();
    }
    compute();
  }, [counter, dispatch]);

  // Idle functionality //
  const timeout = 60000;
  const [isIdle, setIsIdle] = useState(false);

  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);

  useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  const whenIdle = (navigate, location) => {
    if (location.pathname === "/checkout" && isIdle === true) navigate("/");
  };

  return (
    <Fragment>
      {whenIdle(navigate, location)}
      <div className="payment-nav">
        <Header pageName={"checkout"} pageTitle={t("shopping-cart")} />
      </div>
      <main>
        <div className="container-fluid">
          <ArticlesTitleBar />
          <div className="row">
            <Sidebar />
            <div className="col-12 col-md-10 article-list-wrapper">
              <div className="content-section">
                {renderArticles()}
                <div className="row product-scan-main">
                  <input
                    id="barcode-value"
                    type="text"
                    placeholder={t("scan-qr-code")}
                    className="mb-2"
                    value={getBarcode}
                    onChange={onBarcodeChange}
                  />
                </div>
                <div className="fixed-bottom">
                  <PaymentBar
                    total={totalSalePrice.toFixed(2)}
                    total_discount={discountTotal}
                    total_taxes={totalTaxValue.toFixed(2)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Checkout;

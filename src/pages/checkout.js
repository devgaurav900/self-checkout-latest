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
import { useDispatch } from "react-redux";

const Checkout = () => {
  const [articles, setArticles] = useState(null);
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

  const removeItem = () => {
    if(counter - 1 === 0) {
      navigate('/drop-your-items')
    }
    setCounter(counter - 1);
    let oldArr = articles.slice(0, counter);
    computeTotalSalePrice(oldArr);
    computeTotalDiscount(oldArr);
    computeTotalTaxes(oldArr);
  };

  const total_value = totalSalePrice.toFixed(2);
  localStorage.setItem('total-price', total_value)
  const computeTotalSalePrice = (articles) => {
    let totalSalePrice = 0;
    articles
      ? articles.slice(0, counter).forEach((article) => {
          totalSalePrice += salePrice(
            article.price,
            article.discount,
            article.tax
          );
          setTotalSalePrice(totalSalePrice);
        })
      : (totalSalePrice = 0);
    _setCheckoutTotal(dispatch, totalSalePrice);
  };

  const computeTotalDiscount = (articles) => {
    let totalDiscount = 0;
    articles
      ? articles.slice(0, counter).forEach((article) => {
          totalDiscount += saleDiscount(article.price, article.discount);

          setDiscountTotal(totalDiscount);
        })
      : (totalDiscount = 0);
  };

  const total_taxes = totalTaxValue.toFixed(2);
  const computeTotalTaxes = (articles) => {
    let totalTax = 0;
    articles
      ? articles.slice(0, counter).forEach((article) => {
          totalTax += saleTaxes(article.price, article.discount, article.tax);

          setTotalTaxValue(totalTax);
        })
      : (totalTax = 0);
  };

  

  useEffect(() => {
    const load = async () => {
      await getAllArticles();
      await getAllTransactions();
      if (isTransactions) createTransaction(transactionData);
    };
    load();
  }, [isArticles, isTransactions]);

  async function getAllArticles() {
    const allArticles = await getArticles();
    setArticles(allArticles);
    computeTotalSalePrice(allArticles);
    computeTotalDiscount(allArticles);
    computeTotalTaxes(allArticles);
    if (isArticles) setIsArticles(true);
  }

  async function getAllTransactions() {
    const allTransactions = await getTransactions();
    setTransactions(await allTransactions);
    console.log(await allTransactions);
    if (allTransactions) setIsTransactions(true);
    return await allTransactions;
  }

  const transactionData = {};

  const createTransaction = async (transaction) => {
    if (transactions) setTransactions([...transactions, transaction]);
    else {
      await getAllTransactions();
    }
  };

  // Bar Code Scanner
  const onBarcodeChange = async (e) => {
    setGetBarcode(e.target.value);
    await numberOfArticlesToRender();
  };
  const numberOfArticlesToRender = async () => {
    if (counter < articles.length) {
      if ((getBarcode.length % 8 || getBarcode.length % 15) === 0) {
        setCounter(counter + 1);
        console.log("before", totalSalePrice);
        computeTotalSalePrice(articles.slice(0, counter));
        console.log("after", totalSalePrice);
      }
    }
  };

  const salePrice = (originalPrice, discount, tax) => {
    const discountValue = (originalPrice * discount) / 100;
    const discountedPrice = originalPrice - discountValue;
    const gstValue = (discountedPrice * tax) / 100;
    const result_data = discountedPrice + gstValue;
    return result_data;
  };

  const saleDiscount = (originalPrice, discount) => {
    const discountValue = (originalPrice * discount) / 100;
    return discountValue;
  };

  const saleTaxes = (originalPrice, discount, tax) => {
    const discountValue = (originalPrice * discount) / 100;
    const discountedPrice = originalPrice - discountValue;
    const gstValue = (discountedPrice * tax) / 100;
    return gstValue;
  };

  const renderArticles = () => {
    return articles ? (
      articles.slice(0, counter).map((article, index) => (
        <li key={article.id}>
          <Article
            onPress={() => removeItem(index)}
            article={article}
            salePrice={salePrice(article.price, article.discount, article.tax)}
          />
        </li>
      ))
    ) : (
      <p>{t("loading")}</p>
    );
  };

  useEffect(() => {
    computeTotalSalePrice(articles);
    computeTotalDiscount(articles);
    computeTotalTaxes(articles);
  }, [counter]);

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
                    total={total_value}
                    total_discount={discountTotal}
                    total_taxes={total_taxes}
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

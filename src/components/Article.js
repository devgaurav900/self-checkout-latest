import { useTranslation } from 'react-i18next';

function Article({ article, salePrice, onPress }) {
  const { t } = useTranslation();
  
  return (
    <div className="row g-0 product-list-main">
      <div className="col-lg-4 product-list">
          <div className="product-info">
            <h5>
              <strong>{article.description || 'T-shirt'}</strong>
            </h5>
            <div className="product-full-name">{article.info}</div>
          </div>
      </div>
      <div className="col-lg-8">
        <div className="row g-0">
          <div className=" col-md-2 text-center my-auto price">
            <strong>AED {article.priceList.price}</strong>
          </div>
          <div className=" col-md-2  text-center my-auto discount">
            <strong>{process.env.REACT_APP_DEFAULT_DISCOUNT} %</strong>
          </div>
          <div className=" col-md-2  text-center my-auto tax">
            <strong>{process.env.REACT_APP_DEFAULT_TAX} %</strong>
          </div>
          <div className=" col-md-3  text-center my-auto total">
            AED {salePrice}
          </div>
          <div className=" col-md-3 text-right my-auto remove">
            <button id="removebutton" onClick={onPress}>{t("remove")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;

import { useTranslation } from 'react-i18next';

function ArticlesTitleBar() {
  const { t } = useTranslation();

  return (
    <div className="row article-list-nav">
      <div className="text-center bg-dark">
        <div className="row g-0">
          <div className="col-lg-5">
            <p>{t("product")}</p>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-2">
                <p>{t("price")}</p>
              </div>
              <div className="col-lg-2">
                <p>{t("discount")}</p>
              </div>
              <div className="col-lg-2">
                <p>{t("tax")}</p>
              </div>
              <div className="col-lg-2">
                <p>{t("total")}</p>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlesTitleBar;

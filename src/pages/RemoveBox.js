import React,{useEffect, useState} from "react";
import Logo from "../assets/images/main/bfl-group-logo.png";
import Suntech from "../assets/images/main/suntech-logo.png";
import Tshirt from "../assets/images/remove/tshirt.png";
import Greenbutton from "../assets/images/remove/buttongreen.png";
import Removetag from "../assets/images/gif/remove-tag.gif"
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useTranslation } from 'react-i18next';
// import Article from "../components/Article.js";
// import { getArticles } from "../api/article.js";



const RemoveBox = () => {
	const { t } = useTranslation();

  const [username, setUsername] = useState('')

  useEffect(() => {
    const user=	 localStorage.getItem('userName');
    setUsername(JSON.parse(user))
    }, []);


  //   const [articles, setArticles] = useState(null);
  // const [counter, setCounter] = useState(2);
  // const [isArticles, setIsArticles] = useState(false);


  // useEffect(() => {
  //   const load = async () => {
  //     const allArticles = await getAllArticles();

  //   };

  //   load();
  // }, [isArticles]);

  // async function getAllArticles() {
  //   const allArticles = await getArticles();
  //   setArticles(allArticles);
  //   if (isArticles) setIsArticles(true);
  // }

  //   const renderArticles = () => {
  //     return articles ? (
  //       articles.slice(0, counter).map((article, index) => (
  //         <li key={article.id}>
  //           <Article article={article.name}
  //           />
  //         </li>
  //       ))
  //     ) : (
  //       <p>{t('loading')}</p>
  //     );
  //   }
    
  return (
    <>
    <header>
			<div className="Header container-fluid">
				<div className="row payment-nav-main">
					<div className="col-md-3 text-left">
          <img src={Suntech} alt="logo" className="img-fluid" />
					</div>
					<div className="col-md-6 text-center d-flex">
						<h1>{t("remove-tag")}</h1>
						<div className="customer-details">
            <p className="customer-name">Name :- {username}</p>
						<p>{t("date")} :-{new Date().toISOString().slice(0, -14)}</p>
						</div>


					</div>
					<div className="col-md-3 text-right">
          <img src={Logo} alt="logo" className="img-fluid" />		
					</div>
				</div>
			</div>
		</header>
       {/* <div className="payment-nav-main d-flex">
        <img src={Suntech} alt="logo" className="img-fluid" />
        <h3>Remove Tag</h3>
        <img src={Logo} alt="logo" className="img-fluid" />
      </div> */}
      <Sidebar/>
      <section className="remove-main">
      <div className="main-bg">
      <div className="payment-sucess-main-box">
        <h3 className="security-tag">{t("please-remove-the-security-tag")}</h3>
        <div className="product-detail">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="product-details-main">
                <div className="product-box d-flex">
                  {/* {renderArticles()} */}
                   <img src={Tshirt} alt="tshirt" className="img-fluid" />
                  <div className="product-box-details">
                   <h4>{t("t-shirt")}</h4>
                    <h5>{t("roadster")}</h5>
                    <p>{t("men-white-pure-cotton-t-shirt")}</p>
                  </div>
                  <Link to="/receipt"> <img  src={Greenbutton}  alt="tshirt" className="img-fluid red-button" /> </Link>
                </div>
                <div className="product-box d-flex">
                  <img src={Tshirt} alt="tshirt" className="img-fluid" />
                  <div className="product-box-details">
                    <h4>{t("t-shirt")}</h4>
                    <h5>{t("roadster")}</h5>
                    <p>{t("men-white-pure-cotton-t-shirt")}</p>
                  </div>
                  <Link to="/receipt"> <img  src={Greenbutton}  alt="tshirt" className="img-fluid red-button" /> </Link>
                </div>
                <div className="product-box d-flex">
                  <img src={Tshirt} alt="tshirt" className="img-fluid" />
                  <div className="product-box-details">
                  <h4>{t("t-shirt")}</h4>
                    <h5>{t("roadster")}</h5>
                    <p>{t("men-white-pure-cotton-t-shirt")}</p>
                  </div>
                  <Link to="/receipt"> <img  src={Greenbutton}  alt="tshirt" className="img-fluid red-button" /> </Link>
                </div>
                <div className="product-box d-flex">
                  <img src={Tshirt} alt="tshirt" className="img-fluid" />
                  <div className="product-box-details">
                  <h4>{t("t-shirt")}</h4>
                    <h5>{t("roadster")}</h5>
                    <p>{t("men-white-pure-cotton-t-shirt")}</p>
                  </div>
                  <Link to="/receipt"> <img  src={Greenbutton}  alt="tshirt" className="img-fluid red-button" /> </Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="product-image-bg">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="product-main-image">
                        <div className="remove-main-image">
                          <h6>Your tag is removed</h6>
                          <img
                            src={Removetag}
                            alt="tshirt"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="product-main-image">
                        <div className="remove-main-image">
                        <h6>Your tag is removed</h6>
                          <img
                            src={Removetag}
                            alt="tshirt"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="product-main-image">
                        <div className="remove-main-image">
                        <h6>Your tag is removed</h6>
                          <img
                            src={Removetag}
                            alt="tshirt"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
    </>
  );
};

export default RemoveBox;

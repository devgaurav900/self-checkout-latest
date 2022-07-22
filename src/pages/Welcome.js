import React, { useEffect, useState } from "react";
import profileImg from "../assets/images/auth/girl.png";
import sunTechLogo from "../assets/images/main/suntech-logo.png";
import bflLogo from "../assets/images/main/bfl-group-logo.png";
import city from "../assets/images/auth/city.svg";
import { Link } from "react-router-dom";
import MobileVerification from "../popup/MobileVerification";
import i18next from "i18next";
import cookies from "js-cookie";
import { languages } from "../assets/languages/index";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const [mobileVerification, setMobileVerification] = useState(false);

  const closeMobileVerification = () => {
    setMobileVerification(false);
  };

  useEffect(() => {
    document.querySelectorAll(".translate").dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  let accessToken = localStorage.getItem("access-token");
  return (
    <div className="Welcome">
      <div className="column1">
        <div className="profile-img">
          <Link to="/login">
            <img src={profileImg} alt="Profile" />
          </Link>
        </div>
        <div className="instruction">
          <p className="arabic">الرجاء تحديد أي لغة</p>
          <p className="english">Please Select any Language</p>
        </div>
        {!accessToken ? (
          <div className="choices">
            <button className="english choice translate">English</button>
            <button className="arabic choice" >عربي</button>
          </div>
        ) : (
          <div className="choices">
            <button
              className="english choice"
              onClick={() => {
                i18next.changeLanguage("en");
                setMobileVerification(true);
              }}
            >
              English
            </button>
            <button
              className="arabic choice"
              onClick={() => {
                i18next.changeLanguage("ar");
                setMobileVerification(true);
              }}
            >
              عربي
            </button>
          </div>
        )}
      </div>

      <div className="separator"></div>
      <div className="column2">
        <div className="welcome-words">
          <div className="welcome-wrapper">
            <h1 className="arabic">مرحبا بك </h1>
            <h1 className="english">Welcome To</h1>
          </div>
          <div className="bflTech-logo">
            <img src={bflLogo} alt="BFL Group logo " />
          </div>
        </div>
        <div className="sunTech-logo">
          <img src={sunTechLogo} alt="Sun Tech logo " />
        </div>
        <div className="tilted-rectangle"></div>
      </div>
      <div className="city">
        <img src={city} alt="City building" />
      </div>

      <div className="Welcome-mobile">
        <div className="column2">
          <div className="welcome-words">
            <Link to="/login">
              <img src={profileImg} alt="Profile" />
            </Link>
            <div className="welcome-wrapper">
              <h1 className="arabic">مرحبا بك </h1>
              <h1 className="english">Welcome To</h1>
            </div>
            <div className="bflTech-logo">
              <img src={bflLogo} alt="BFL Group logo " />
            </div>
          </div>
        </div>
        <div className="column1">
          <div className="instruction">
            <p className="arabic">الرجاء تحديد أي لغة</p>
            <p className="english">Please Select any Language</p>
          </div>
          <div className="choices">
            <button
              className="english choice"
              onClick={() => setMobileVerification(true)}
            >
              English
            </button>
            <button
              className="arabic choice"
              onClick={() => {
                i18next.changeLanguage("ar");
                setMobileVerification(true);
              }}
            >
              عربي
            </button>
          </div>
        </div>
        <div className="sunTech-logo">
          <img src={sunTechLogo} alt="Sun Tech logo " />
        </div>
        <div className="city">
          <img src={city} alt="City building" />
        </div>
      </div>
      <MobileVerification
        MobileNumber={mobileVerification}
        closeVerification={closeMobileVerification}
      />
    </div>
  );
};

export default Welcome;

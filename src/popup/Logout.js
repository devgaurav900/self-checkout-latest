import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Logout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const LogoutSession = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <>
      <div className="logout-main">
          <button type="button" className="logout-button" onClick={LogoutSession}>
            <FiLogOut />{t("logout")}
          </button> 
      </div>
    </>
  );
};

export default Logout;

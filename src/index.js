import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/main.scss";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";

import i18next from "i18next";
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

/* Start the mockup Service Worker (msw) only when in development mode */
// if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "production") {
//   const { worker } = require("./mocks/browser.js");
//   worker.start();
// }

/* Language selection feature */
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    debug: false,

    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },

    backend: {
      loadPath: 'assets/locals/translations/{{lng}}.json',
    }
  })

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

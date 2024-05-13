
import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
// import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(backend)
//   .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: "en", // if you're using a language detector, do not define the lng option
  });
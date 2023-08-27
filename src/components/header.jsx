import React from "react";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export const Header = (props) => {

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {t('title')}
                  <span></span>
                </h1>
                <p>1983</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {t('news')}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

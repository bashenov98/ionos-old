import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import lang from '../media/globe-africa-solid.svg'

export const Navigation = (props) => {
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();
  const [isDropdownVisible, setDropdownVisibility] = useState(0);

  return (

    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="nav-container">
        <a className="navbar-brand page-scroll">
          IONOS
        </a>{" "}
        <div
          className=""
        >
          <ul className="nav navbar-nav navbar-right">
            <li onMouseEnter={() => setDropdownVisibility(1)}
              onMouseLeave={() => setDropdownVisibility(0)}>
              <a class='dropdown-toggle'>{t('institute')}</a>
              <ul class="dropdown-menu no-border-radius fadeIn animated" style={{ display: isDropdownVisible === 1 ? 'block' : 'none' }}>
                <li className='droptab'><Link className='droptab-link' to="/institute/news">{t('news')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/institute/history">{t('history')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/institute/staff">{t('staff')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/institute/experimentalbase">{t('experimentalbase')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/institute/technicalequipment">{t('technicalequipment')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/institute/youngscientists">{t('youngscientists')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/institute/anticorruption">{t('anticorruption')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/institute/govpurchases">{t('govpurchases')}</Link></li>
              </ul>
            </li>
            <li onMouseEnter={() => setDropdownVisibility(2)}
              onMouseLeave={() => setDropdownVisibility(0)}>
              <a class='dropdown-toggle'>{t('performance')}</a>
              <ul class="dropdown-menu no-border-radius fadeIn animated" style={{ display: isDropdownVisible === 2 ? 'block' : 'none' }}>
                <li className='droptab'><Link className='droptab-link' to="/performance/currentprojects">{t('currentprojects')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/performance/publications">{t('publications')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/performance/seminars">{t('seminars')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/performance/patents">{t('patents')}</Link></li>
              </ul>
            </li>
            <li onMouseEnter={() => setDropdownVisibility(3)}
              onMouseLeave={() => setDropdownVisibility(0)}>
              <a class='dropdown-toggle'>{t('services')}</a>
              <ul class="dropdown-menu no-border-radius fadeIn animated" style={{ display: isDropdownVisible === 3 ? 'block' : 'none' }}>
                <li className='droptab'><Link className='droptab-link' to="/services/geophysicalforecast">{t('geophysicalforecast')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/services/geomagneticdimensions">{t('geomagneticdimensions')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/services/aerospacemonitoring">{t('aerospacemonitoring')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/services/geoinformsystemdevelopment">{t('geoinformsystemdevelopment')}</Link></li>
              </ul>
            </li>
            <li onMouseEnter={() => setDropdownVisibility(4)}
              onMouseLeave={() => setDropdownVisibility(0)}>
              <a class='dropdown-toggle'>{t('labs')}</a>
              <ul class="dropdown-menu no-border-radius fadeIn animated" style={{ display: isDropdownVisible === 4 ? 'block' : 'none' }}>
                <li className='droptab'><Link className='droptab-link' to="/labs/diagnosticlab">{t('diagnosticlab')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/labs/nonstationarylab">{t('nonstationarylab')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/labs/geomagneticlab">{t('geomagneticlab')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/labs/reliabilitylab">{t('reliabilitylab')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/labs/geodynamiclab">{t('geodynamiclab')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/labs/complexlab">{t('complexlab')}</Link></li>
                <li className='droptab'><Link className='droptab-link' to="/labs/cartographylab">{t('cartographylab')}</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <div class="dropdown">
            <img class="dropbtn" src={lang} />
            <div class="dropdown-content">
              <a onClick={() => changeLanguage('kz')}>KZ</a>
              <a onClick={() => changeLanguage('en')}>EN</a>
              <a onClick={() => changeLanguage('ru')}>RU</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

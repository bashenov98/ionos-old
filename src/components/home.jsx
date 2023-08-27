import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import JsonData from '../data/data.json'

import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import { Header } from "./header";


export const Home = (props) => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    const { t } = useTranslation();

    return (
        <div>
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <div id="map" styles="width:500px; height:400px"></div>
        </div>
    );
};

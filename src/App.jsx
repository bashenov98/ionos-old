import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import { Home } from "./components/home";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Staff } from "./components/Staff";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { News, NewsDetail } from "./components/News";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/institute/staff" Component={Staff}/>
          <Route path="/institute/news" Component={News}/>
          <Route path="/institute/news/:id" Component={NewsDetail} />

          {/* <Route path="/labs/diagnosticlab" Component={Labs} />
          <Route path="/labs/nonstationarylab" Component={Labs} />
          <Route path="/labs/geomagneticlab" Component={Labs} />
          <Route path="/labs/reliabilitylab" Component={Labs} />
          <Route path="/labs/geodynamiclab" Component={Labs} />
          <Route path="/labs/complexlab" Component={Labs} />
          <Route path="/labs/cartographylab" Component={Labs} />
          <Route path="/institute/news" Component={News}/>
          <Route path="/institute/history" Component={History}/>
          <Route path="/institute/staff" Component={Staff}/>
          <Route path="/institute/experimentalbase" Component={ExperimentalBase}/>
          <Route path="/institute/technicalequipment" Component={TechEquip}/>
          <Route path="/institute/youngscientists" Component={YoungScientists}/>
          <Route path="/institute/anticorruption" Component={Anticorruption}/>
          <Route path="/institute/govpurchases" Component={GovPurchases}/>
          
          <Route path="/services/geophysicalforecast" Component={GeophysicalForecast}/>
          <Route path="/services/geomagneticdimensions" Component={GeomagneticDimensions}/>
          <Route path="/services/aerospacemonitoring" Component={AerospaceMonitoring}/>
          <Route path="/services/geoinformsystemdevelopment" Component={SystemDev}/>

          <Route path="/performance/currentprojects" Component={Projects}/>
          <Route path="/performance/publications" Component={Publications}/>
          <Route path="/performance/seminars" Component={Seminars}/>
          <Route path="/performance/patents" Component={Patents}/> */}

        </Routes>
      </div>
    </Router>

    // <div>
    //   <Navigation />
    //   <Header data={landingPageData.Header} />
    //   <Features data={landingPageData.Features} />
    //   <About data={landingPageData.About} />
    //   <Services data={landingPageData.Services} />
    //   <Gallery data={landingPageData.Gallery} />
    //   <Testimonials data={landingPageData.Testimonials} />
    //   <Team data={landingPageData.Team} />
    //   <Contact data={landingPageData.Contact} />
    // </div>
  );
};

export default App;

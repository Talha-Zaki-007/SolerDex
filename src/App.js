import './App.css';
import Header from './components/header/header';
import Main from './components/header/main';
import About from './components/abouSolar/about'
import Tokonomics from './components/tokonomics/tokonomics'
import Roadmap from './components/roadmap/roadmap';
import OurTeam from './components/ourTeam/ourTeam'
import OurPartners from './components/ourPartners/ourPartners';
import MediaMention from './components/mediaMention/mediaMention';
import Footer from './components/footer/footer'
import EndHill from './components/endHill/endHill';

import SecondHeader from './components/secondPage/secondHeader'
import SolarDexCalculator from './components/secondPage/solarDexCalculator';
import Statistics from './components/secondPage/statistics';
import StackRecords from './components/secondPage/stackRecords'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Scroll from './components/scroll/scroll';
import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import ResponsiveDrawer from './components/responsiveDrawer/responsiveDrawer';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <>

      <BrowserRouter>
        <Header />
        <Main />

        <Routes>
          <Route path='/'
            element={
              <>
                <About />
                <Tokonomics />
                <Roadmap />
                <OurTeam />
              </>
            } />
        </Routes>

        <Scroll />
        <OurPartners />
        <MediaMention />
        <Footer />
        <EndHill />



        {/* Second Page from here */}
        {/* <ResponsiveDrawer/> */}
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <SecondHeader />
            } />
        </Routes>
        <SolarDexCalculator />
        <Statistics />
        <StackRecords />
        <Footer />
        <EndHill />

      </BrowserRouter>

    </>
  );
}

export default App;

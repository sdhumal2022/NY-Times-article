/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import logo from './logo.svg';
 import CpHeader from './components/cp-header/cpHeader';
import { getFooterData } from "./components/cp-footer/cpFooter_data";
import { getHeaderData } from "./components/cp-header/cpHeader_data";
import CpFooter from './components/cp-footer/cpFooter';
import CpBanner from './components/cp-banner/cpBanner';
import CpArticleListing from './components/cp-article-listing/cpArticleListing';

const footerData = getFooterData();
const headerData = getHeaderData();

function App() {
  return (
    <div className="App">
     <CpHeader headerData={headerData}/> 
     <CpBanner/>
     <CpArticleListing/>
     <CpFooter footerData={footerData}/> 
    </div>
  );
}

export default App;

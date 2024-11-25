import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Intro/_components/page';
import HyundaiPage from "./hyundai/_components/page";
import EtcPage from "./etc/_components/page";
import ClovinePage from "./clovine/_components/page";
import CarTaxPage from "./cartax/_components/page";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <body className="overflow-x-hidden">
        <Page/>
        <HyundaiPage/>
        <EtcPage />
        <ClovinePage />
        <CarTaxPage />
      </body>
    </div>
  );
}

export default App;

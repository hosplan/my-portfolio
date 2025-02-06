import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Page from "./Intro/_components/page";
import HyundaiPage from "./hyundai/_components/page";
import EtcPage from "./etc/_components/page";
import ClovinePage from "./clovine/_components/page";
import CarTaxPage from "./cartax/_components/page";
import EndPage from "./end/_components/page";
import dev from "./developer.module.scss";
import KeyboardhintPage from "./keyboardHint/_components/page";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="overflow-x-hidden w-full p-2 md:p-10">
        <div id={dev.smallStars}></div>
        <div id={dev.middleStars}></div>
        <div id={dev.bigStars}></div>
        <Page />
        <div className="flex flex-col wrap">
          <KeyboardhintPage />
          <CarTaxPage />
          <ClovinePage />
          <EtcPage />
          <HyundaiPage />
          <EndPage />
        </div>
      </div>
    </div>
  );
}

export default App;

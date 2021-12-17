import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./utils/reportWebVitals";
import "./base.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "./components/menu-bar";
import IndexPage from "./components/pages";
import SummaryPage from "./components/pages/summary";

const Pages = () => 
<BrowserRouter basename="/">
<MenuBar />
<Routes>
  {/* add page component */}
  <Route path="/" element={<IndexPage />} />
  <Route path="/summary" element={<SummaryPage />} />
</Routes>
</BrowserRouter>
;

ReactDOM.render(<React.StrictMode><Pages /></React.StrictMode>, document.getElementById("root"));

reportWebVitals();
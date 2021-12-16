import React, { VFC } from "react";
import ReactDOM from "react-dom";
import MenuContainer from "./components/menu-container";
import reportWebVitals from "./utils/reportWebVitals";
import "./style/index.scss";

const IndexPage: VFC = () => {
    return (
        <>
        <h1>Homepage Starter</h1>
        </>
    );
};

ReactDOM.render(<React.StrictMode><MenuContainer Component={IndexPage} /></React.StrictMode>, document.getElementById("root"));

reportWebVitals();

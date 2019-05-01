import React from "react";
import ReactDOM from "react-dom";

import(/* webpackChunkName: "app" */ "./components/App")
.then(({ default: App }) => {
    ReactDOM.render(
        <App />, 
    document.getElementById("root"))
});


import "./index.css";

import React                    from "react";
import ReactDOM                 from "react-dom";
import App                      from "./App";
import registerServiceWorker    from "./registerServiceWorker";

import Teams                    from "./assets/data";

ReactDOM.render(
    <App teams={Teams} />, 
    document.getElementById("root")
);

registerServiceWorker();

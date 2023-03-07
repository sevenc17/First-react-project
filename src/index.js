"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var ModalContext_1 = require("./context/ModalContext");
var react_router_dom_1 = require("react-router-dom");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(<react_router_dom_1.BrowserRouter>
    <ModalContext_1.ModalState>
      <App_1 />
    </ModalContext_1.ModalState>
  </react_router_dom_1.BrowserRouter>);

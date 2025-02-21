/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
*/

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

const basename = process.env.PUBLIC_URL;

ReactDOM.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

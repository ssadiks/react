import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import store from './store';

const app = document.getElementById('app');

// Notice that we've organized all of our routes into a separate file.
import Router from './router';

ReactDOM.render(<Provider store={store}>{Router}</Provider>, app);
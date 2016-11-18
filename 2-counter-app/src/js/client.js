import React from "react";
import ReactDOM from "react-dom";

import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers/index';

const store = createStore(counter);
const app = document.getElementById('app');

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onReset={() => store.dispatch({ type: 'RESET' })}
  />,
  app
)

render();
store.subscribe(render);
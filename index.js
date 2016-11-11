import React, { Component } from 'react';
import { render }           from 'react-dom';
import { Provider }         from 'react-redux';
import thunk                from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './public/src/reducers/root';

import App from './public/src/components/app';

let store = createStore(rootReducer, applyMiddleware(thunk));

render(<Provider store={store}>
         <App />
       </Provider>, document.getElementById('app'))

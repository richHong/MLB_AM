import React, 
       { Component }        from 'react';
import { render }           from 'react-dom';
import { Provider }         from 'react-redux';
import thunk                from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, 
         applyMiddleware }  from 'redux';

import rootReducer from './public/src/reducers/root';

import { gameSaga } from './public/src/sagas/sagas';

import App from './public/src/components/app';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(gameSaga);

render(<Provider store={store}>
         <App />
       </Provider>, document.getElementById('app'))

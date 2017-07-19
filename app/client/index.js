import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routers';
import reducers from './reducers/index';
import logger from 'redux-logger';
import './style/index';

injectTapEventPlugin();

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;


const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, preloadedState)}>
        {/*<MuiThemeProvider>*/}
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
        {/*</MuiThemeProvider>*/}
    </Provider>
    , document.querySelector('.container')
);

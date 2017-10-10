import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routers';
import reducers from './reducers/index';
import logger from 'redux-logger';
import './style/index';

// injectTapEventPlugin();

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;


const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, preloadedState)}>
        {/*<MuiThemeProvider>*/}
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
        {/*</MuiThemeProvider>*/}
    </Provider>
    , document.querySelector('.container')
);

if('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('ws.js')
            .then(function (registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            }).catch(err => console.log(err));
    });
} else {
    console.log('service worker is not supported');
}

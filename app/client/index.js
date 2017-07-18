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
import './style/index';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider>
            <BrowserRouter>
                {/* kick it all off with the root route */}
                {renderRoutes(routes)}
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.querySelector('.container')
);

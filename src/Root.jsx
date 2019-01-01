import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { MuiThemeProvider } from '@material-ui/core/styles';

import reducer from './reducer';

import App from './App';
import theme from './theme';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <App/>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default Root;

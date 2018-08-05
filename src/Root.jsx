import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './App';
import theme from './theme';

class Root extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        );
    }
}

export default Root;
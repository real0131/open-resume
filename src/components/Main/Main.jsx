import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Profile from './components/Profile';
import InfoBox from './components/InfoBox';

const style = theme => ({
   root: {
       width: '100vw',
       height: '100vh',
   },
   container: {
       boxSizing: 'border-box',
       width: '70%',
       minHeight: '80vh',
       margin: '10px auto',
       backgroundColor: 'white',
       padding: '0 16px',
       boxShadow: '0 2px 2px 0 rgba(0, 0, 0, .14),\n' +
       '0 1px 5px 0 rgba(0, 0, 0, .12),\n' +
       '0 3px 1px -2px rgba(0, 0, 0, .2)',
       [theme.breakpoints.down(480)]: {
           width: '100%',
           margin: '0',
           minHeight: '100vh',
       },
   },
});

class Main extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <Profile />
                    <InfoBox />
                </div>
            </div>
        )
    }
}

export default withStyles(style)(Main);

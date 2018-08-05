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
       width: '70%',
       margin: '0 auto',
       [theme.breakpoints.down(480)]: {
           boxSizing: 'border-box',
           width: '100%',
           padding: '0 16px',
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

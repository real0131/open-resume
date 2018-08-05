import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    root: {
        position: 'fixed',
        bottom: '10px',
        height: '64px',
        width: '100vw',
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.down(480)]: {
            bottom: '0',
        }
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80vw',
        height: '64px',
        borderRadius: '10px',
        margin: '0 auto',
        backgroundColor: 'white',
        boxShadow: '0 8px 10px 1px rgba(0, 0, 0, .14),\n' +
        '0 3px 14px 2px rgba(0, 0, 0, .12),\n' +
        '0 5px 5px -3px rgba(0, 0, 0, .4)',
        [theme.breakpoints.down(480)]: {
            boxSizing: 'border-box',
            width: '100%',
            padding: '0 10px',
            borderRadius: '0',
        }
    }
});

class ToolBox extends React.Component {
   render() {
       const { classes } = this.props;
       return(
           <div className={classes.root}>
               <div className={classes.toolbar}>
                   tool box
               </div>
           </div>
       )
   }
}

export default withStyles(style)(ToolBox);

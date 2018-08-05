import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const style = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
});

class Appbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Open Resume
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(style)(Appbar) ;
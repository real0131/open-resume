import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    input: {
        fontSize: 'inherit',
        border: 'none',
    },
});

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { placeholder, value, classes } = this.props;
        return(
            <input className={classes.input} placeholder={placeholder} value={value} />
        )
    }
}

export default withStyles(style)(Input);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    textarea: {
        width: '100%',
        fontFamily: theme.typography.fontFamily[0], // Noto Sans KR
        fontSize: 'inherit',
        border: 'none',
        resize: 'none',
        minHeight: '100px',
    },
});

class Textarea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { placeholder, value, classes } = this.props;
        return(
            <textarea className={classes.textarea} placeholder={placeholder} value={value} {...this.props} />
        )
    }
}

export default withStyles(style)(Textarea);

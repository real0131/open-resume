import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    toc: {
        textAlign: 'left',
        paddingBottom: '10px',
        borderBottom: '1px solid #000',
    },
    content: {
        textAlign: 'left',
        wordWrap: 'break-word',
    }
});

class InfoBox extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <sector>
                <h2 className={classes.toc}>이것은 제목</h2>
                <div className={classes.content}>이것은 내용</div>
            </sector>
        )
    }
}

export default withStyles(style)(InfoBox);

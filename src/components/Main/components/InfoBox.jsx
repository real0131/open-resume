import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '../../common/Input';
import Textarea from '../../common/Textarea';

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
    constructor(props) {
        super(props);

        this.state = {
            editState: true,
        };
    }
    render() {
        const { classes } = this.props;
        const { editState } = this.state;

        if(editState){
            return(
                <sector>
                    <h2 className={classes.toc}>
                        <Input placeholder="제목"/>
                    </h2>
                    <div className={classes.content}>
                        <Textarea placeholder="내용"/>
                    </div>
                </sector>
            )
        } else {
            return(
                <sector>
                    <h2 className={classes.toc}>이것은 제목</h2>
                    <div className={classes.content}>이것은 내용</div>
                </sector>
            )
        }
    }
}

export default withStyles(style)(InfoBox);

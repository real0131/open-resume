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
            title: '',
            content: '',
        };
    }
    render() {
        const { classes, editState } = this.props;
        const { title, content } = this.state;

        if(editState){
            return(
                <sector>
                    <h2 className={classes.toc}>
                        <Input value={title} placeholder="제목" onChange={(e) => this.setState({title: e.target.value})} />
                    </h2>
                    <div className={classes.content}>
                        <Textarea value={content} placeholder="내용" onChange={(e) => this.setState({content: e.target.value})} />
                    </div>
                </sector>
            )
        } else {
            return(
                <sector>
                    <h2 className={classes.toc}>{title}</h2>
                    <div className={classes.content}>{content}</div>
                </sector>
            )
        }
    }
}

export default withStyles(style)(InfoBox);

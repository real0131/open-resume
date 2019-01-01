import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import {configToggleEditState} from "../../actions/config";

import CreateIcon from '@material-ui/icons/Create';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

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
        backgroundColor: '#323232',
        color: '#adadad',
        boxShadow: '0 8px 10px 1px rgba(0, 0, 0, .14),\n' +
        '0 3px 14px 2px rgba(0, 0, 0, .12),\n' +
        '0 5px 5px -3px rgba(0, 0, 0, .4)',
        [theme.breakpoints.down(480)]: {
            boxSizing: 'border-box',
            width: '100%',
            padding: '0 10px',
            borderRadius: '0',
        }
    },
    icon: {
        fontSize: '32px',
    },
    iconWrapper: {
        boxSizing: 'border-box',
        height: '100%',
        cursor: 'pointer',
        padding: '16px',
    },
});

class ToolBox extends React.Component {
    constructor(props) {
        super(props);

        // const { toolState } = this.state;
        // tool state : none || create || export || addPicture || addNote || back
        this.handleToolChange = this.handleToolChange.bind(this);
    }

    handleToolChange(name) {

    }

    changeEditState = () => {
        this.props.configToggleEditState();
    };

   render() {
       const { classes } = this.props;
       return(
           <div className={classes.root}>
               <div className={classes.toolbar}>
                   <div className={classes.iconWrapper} title="편집모드, 뷰어모드 변환" onClick={this.changeEditState}>
                       <CreateIcon className={classes.icon}/>
                   </div>
                   <div className={classes.iconWrapper} title="저장하기">
                       <ImportExportIcon className={classes.icon}/>
                   </div>
                   <div className={classes.iconWrapper} title="사진추가">
                       <AddPhotoAlternateIcon className={classes.icon}/>
                   </div>
                   <div className={classes.iconWrapper} title="항목추가">
                       <NoteAddIcon className={classes.icon}/>
                   </div>
               </div>
           </div>
       )
   }
}

const stateMapper = undefined;
const dispatchMapper = dispatch => ({
    configToggleEditState() {
        dispatch(configToggleEditState());
    },
});

export default connect(stateMapper, dispatchMapper)(withStyles(style)(ToolBox));

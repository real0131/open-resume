import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import defaultProfileImage from './profile.png';
import Input from '../../common/Input';

const style = theme => ({
    root: {
        width: '100%',
        padding: '16px 16px',
        display: 'flex',
        justifyContent: 'center',
    },
    profileImageWrapper: {
        width: '128px',
        height: '128px',
    },
    profileImage: {
        width: '128px',
        height: '128px',
        borderRadius: '50%',
    },
    profileImageOverlay: {
        position: "relative",
        top: '-132px', // TODO:??? 왜 저러지
        width: '128px',
        height: '128px',
        borderRadius: '50%',
        lineHeight: '196px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        cursor: 'pointer',
        textAlign: 'center'
    },
    infoWrapper: {
        padding: '32px',
        margin:'0 16px',
        textAlign: 'left',
    },
    infoName: {
        fontWeight: '700',
        fontSize: '2rem',
    },
    infoSubName: {
        fontSize: '1.2rem',
        fontWeight: '300',
        color: 'rgba(55,71,79,0.5)',
    }
});

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editState: true,
            name: '',
            subname: ''
        }
        // editState : 값 true || false, true일때는 편집모드false 일때 뷰어모드
    }
    render() {
        const { classes, editState } = this.props;
        const { name, subname } = this.state;

        if (editState) {
            return(
                <div className={classes.root}>
                    <div className={classes.profileImageWrapper}>
                        <img className={classes.profileImage} alt="profile" src={defaultProfileImage} />
                        <div className={classes.profileImageOverlay}>이미지 변경</div>
                    </div>
                    <div className={classes.infoWrapper}>
                        <div className={classes.infoName}>
                            <Input value={name} placeholder="Name" onChange={(e) => this.setState({name: e.target.value})}/>
                        </div>
                        <div className={classes.infoSubName}>
                            <Input value={subname} placeholder="Sub Name" onChange={(e) => this.setState({subname: e.target.value})}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className={classes.root}>
                    <div className={classes.profileImageWrapper}>
                        <img className={classes.profileImage} alt="profile" src={defaultProfileImage} />
                    </div>
                    <div className={classes.infoWrapper}>
                        <div className={classes.infoName}>{name}</div>
                        <div className={classes.infoSubName}>{subname}</div>
                    </div>
                </div>
            )
        }

    }
}

export default withStyles(style)(Profile);

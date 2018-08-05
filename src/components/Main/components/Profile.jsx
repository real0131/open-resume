import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import defaultProfileImage from './profile.png';

const style = theme => ({
    root: {
        width: '100%',
        padding: '0 16px',
        margin: '16px 0',
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
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.profileImageWrapper}>
                    <img className={classes.profileImage} alt="profile" src={defaultProfileImage} />
                </div>
                <div className={classes.infoWrapper}>
                    <div className={classes.infoName}>조재호</div>
                    <div className={classes.infoSubName}>Jaeho Cho</div>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(Profile);

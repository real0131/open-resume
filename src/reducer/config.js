import { CONFIG_TOGGLE_EDIT_STATE } from '../actions/config';

const initState = {
    editState: true,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case CONFIG_TOGGLE_EDIT_STATE:
            let changeState = state;
            changeState.editState = !changeState.editState;
            return Object.assign({}, changeState);
        default:
            return state;
    }
};

export default reducer;

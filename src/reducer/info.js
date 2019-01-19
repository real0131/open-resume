import {ADD_NOTE} from "../actions/info";

const initState = [''];

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            let add_note = initState;
            add_note.push('');
            return [...add_note];
        default:
            return state;
    }
};

export default reducer;

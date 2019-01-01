import { combineReducers } from 'redux';

import info from './info';
import config from './config';

export default combineReducers({
    info,
    config
});

import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';

//import { combineReducers } from '../../node_modules/redux';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer
})

export default rootReducer;

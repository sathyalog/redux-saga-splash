import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ),
    );
    sagaMiddleware.run(rootSaga);
    //dispatching IMAGES.LOAD event to check worker saga functionality. pls check console.
    store.dispatch({type:'IMAGES.LOAD'})
    return store;
};

export default configureStore;
import { takeEvery, put } from 'redux-saga/effects'; 

//watcher saga
function* rootSaga() {
    yield takeEvery('HELLO', workerSaga);//until HELLO action hits in store, worker saga will not be called
    console.log('Hey Saga')
}

//worker saga
function* workerSaga() {
    console.log('Hey i am worker saga');
    //dispatch another action from saga
    yield put({type:'ACTION_FROM_WORKER'})
}
//watcher saga -> will listen to actions -> worker saga

export default rootSaga;
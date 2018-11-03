## What is Redux Saga?

redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures.

The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects. redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal redux actions, it has access to the full redux application state and it can dispatch redux actions as well.

## Why redux-saga?

Any function cannot be paused in middle and also cannot return more than one return.
Which means..
function SayHi() {
	//statement1
	//statement2 -> you cannot pause here
	return ‘hi’;
	return ‘hello’; -> this will not execute in normal functions as with return ‘hi’ the scope will move out of function
}

**Generators** will help us to go beyond the normal functions

With ES6, we have been introduced with a special type of functions called generators. With generators, the functions can be paused in the middle multiple times and resumed later which allows other codes to run in between.

Inside the generator function, we use a special keyword called yield which is used to pause the function inside itself.

So, a generator function can be stopped and restarted as many times as we like.With normal functions, we get parameters in the beginning and a return statement in the end. With generator functions, you send messages out with each yield, and you send messages back in with each restart.

The syntax of generator function is like this —

function* abc()

// code here

}

## Saga Helpers

redux-saga provides some helper effects wrapping internal functions to spawn tasks when some specific actions are dispatched to the Store.
The first function, takeEvery is the most familiar and provides a behavior similar to redux-thunk.

Let's illustrate with the common AJAX example. On each click on a Fetch button we dispatch a FETCH_REQUESTED action. We want to handle this action by launching a task that will fetch some data from the server.

First we create the task that will perform the asynchronous action:

import { call, put } from 'redux-saga/effects'

export function* fetchData(action) {
   try {
      const data = yield call(Api.fetchUser, action.payload.url)
      yield put({type: "FETCH_SUCCEEDED", data})
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

To launch the above task on each FETCH_REQUESTED action:

import { takeEvery } from 'redux-saga/effects'

function* watchFetchData() {
  yield takeEvery('FETCH_REQUESTED', fetchData)
}

In the above example, takeEvery allows multiple fetchData instances to be started concurrently. At a given moment, we can start a new fetchData task while there are still one or more previous fetchData tasks which have not yet terminated.
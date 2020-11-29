// redux 是单例模式，也是工厂模式

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
  }
  return {
    subscribe,
    getState,
    dispatch,
  }


}

let reducer = function () {

}

let store = createStore(reducer);



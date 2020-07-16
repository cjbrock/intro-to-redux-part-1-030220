import { createStore } from 'redux'

const todos = [
  {id: 1, name: "Fix air conditioning"},
  {id: 2, name: "Start final project"},
  {id: 3, name: "Teach study group"},
  {id: 4, name: "Finish labs"},
  {id: 5, name: "Learn Redux"},
  {id: 6, name: "Get shit together"},
  {id: 7, name: "Try not to cry at final one on ones"}
]


function todosReducer(state = todos, action) {
  switch (action.type) {
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
import{ combineReducers, createStore } from 'redux'
import { authReducer } from './auth/AuthReducer'
import { todoReducer } from './todo-reducer/TodoReducer'


const rootReducer = combineReducers({
    todo: todoReducer,
    auth: authReducer
})

export const store = createStore(rootReducer)
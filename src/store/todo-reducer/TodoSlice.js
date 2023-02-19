import {createSlice} from "@reduxjs/toolkit";

const initialState = [
      {
        id: 1,
        text: "One",
        complete: false,
      },
      {
        id: 2,
        text: "Two",
        complete: false,
      },
    ]

  export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
      addTodos(state,action){
        state.push(action.payload);
      },
      editTodos(state,action){
        let data = action.payload;
        console.log(data);
      const newArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.text = data.text;
          item.complete = data.complete;
        }
        return (state = newArray.push(item));
      });
      },
      deleteTodos(state,action){
        const filteredTodos = state.filter((todo) => {
          return todo.id !== action.payload
      });
      return  filteredTodos
    },
     completeTodos(state,action){
      let newArray = [];
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.complete = !todo.complete 
        }
        return (state = newArray.push(todo));
      });
     },
     deleteAllTodos(state){
      state.splice(0, state.length);
     }

  }})

  export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
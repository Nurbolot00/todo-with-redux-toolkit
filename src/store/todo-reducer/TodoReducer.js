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

 export const actionTypes={
    ADD: 'ADD',
    EDIT: 'EDIT',
    DELETE: 'DELETE',
    COMPLETE: "COMPLETE",
    DELETE_ALL: "DELETE_ALL"
  }

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD: {
        const newTodo = {
          id: Date.now(),
          text: action.payload,
          complete: false,
        };

        return  [...state, newTodo]
        
      }
      case actionTypes.EDIT: {
        const idx = state.findIndex((t) => t.id === action.payload);
        const todo = Object.assign({}, state[idx]);
        todo.text = action.text;
        const todos = [...state];
        todos.splice(idx, 1, todo);
        return  todos
        
      }
      case actionTypes.DELETE: {
        const filteredTodos = state.filter((todo) => todo.id !== action.payload);
        console.log(action.payload);
        return  filteredTodos
      }
  
      case actionTypes.COMPLETE: {
        console.log(action.payload);
        const completed = state.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
        return completed 
    }

    case actionTypes.DELETE_ALL: {
        return []
    }
      default:
        return state;
    }
  };
  
 
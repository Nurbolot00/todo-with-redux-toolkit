import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import { store } from './store';
import Auth from './components/Auth';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/header' element={<Header/>}>
          <Route path='todoList' element={<TodoForm/>}/>
          </Route>
        </Routes>

      </Provider>
     
    </div>
  );
}

export default App;

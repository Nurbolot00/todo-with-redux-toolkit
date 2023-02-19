import './App.css';
import TodoForm from './components/TodoForm';
import { Provider } from 'react-redux';
import { store } from './store';
import Auth from './components/Auth';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';

function AppContent() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/header' element={<Header/>}>
          <Route path='todoList' element={<TodoForm/>}/>
          </Route>
        </Routes>

      
     
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent/>
    </Provider>
  );
};


export default App;

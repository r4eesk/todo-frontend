
import './App.css';
import TodoApp from './components/todo/TodoApp';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <TodoApp />
      </div>
    </CookiesProvider>
  );
}

export default App;

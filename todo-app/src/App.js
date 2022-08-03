import './App.css';
import RenderToDo from './components/renderToDo';
import CreateToDo from './components/createToDo';
function App() {
  return (
    <div>
      <div className='header'>
        <h1>Todo List</h1>
        <CreateToDo/>
      </div>
      <div>
        <RenderToDo />
      </div>

    </div>
  );
}

export default App;

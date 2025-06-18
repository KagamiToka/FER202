import logo from './logo.svg';
import './App.css';
import Counter from './Ex1';
import { ControlledInput } from './Ex2';
import { ToggleVisibility } from './Ex3';
import { TodoList } from './Ex4';
import { ColorSwitcher } from './Ex5';
import { SearchFilter } from './Ex6';
import { DragAndDropList } from './Ex7';

function App() {
  return (
    <div className="App">
      <Counter />
      <ControlledInput />
      <ToggleVisibility />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragAndDropList />
    </div>
  );
}

export default App;

import React from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const todos = [
  {id: 't1', text: 'Finish the course'},
  {id: 't2', text: 'Finish Web Dev Bootcamp'}
];
//Should not return void type for App component
function App() {
  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      {/* A component that adds todos */}
      <TodoList items={todos}/>
    </div>
  );
}

export default App;

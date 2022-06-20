import React from 'react';

import TodoList from './components/TodoList';
//Should not return void type for App component
function App() {
  const todos = [
    {id: 't1', text: 'Finish the course'},
    {id: 't2', text: 'Finish Web Dev Bootcamp'}
];
  return (
    <div className="App">
      {/* A component that adds todos */}
      <TodoList items={todos}/>
    </div>
  );
}

export default App;

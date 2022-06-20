import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

// const todos = [
  //   {id: 't1', text: 'Finish the course'},
  //   {id: 't2', text: 'Finish Web Dev Bootcamp'}
  // ];
  //Should not return void type for App component
  function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
      setTodos([{id: Math.random().toString(), text: text}]);
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

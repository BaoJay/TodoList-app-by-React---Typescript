import React from 'react';

interface TodoListProps {
    // An array of objects
    items: {id: string, text: string}[];
}

const TodoList = (props: TodoListProps) => {
    return <ul>
        {props.items.map(todo => (
            <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>
}

export default TodoList;
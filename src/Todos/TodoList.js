import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

import './TodoList.css'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    //remove a todo from list
    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const addTodo = (task) => {
        setTodos([...todos, { task, id: uuid() }])
    }

    return (
        <div className='TodoList'>
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        task={todo.task}
                        remove={() => removeTodo(todo.id)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
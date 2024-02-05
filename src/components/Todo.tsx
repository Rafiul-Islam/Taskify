import TodoModal from "../model/todo.ts";
import React, {FormEvent, useState} from "react";

interface PropsType {
    todo: TodoModal,
    todos: TodoModal[],
    setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>
}

const Todo = ({todo, todos, setTodos}: PropsType) => {
    const {id, todo: todoTask, isCompleted} = todo;
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const handleComplete = (todoId: string) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoId) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    const handleDelete = (todoId: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }
    const handleEdit = (todoId: string) => {
        console.log(todoId);
        setIsEditable(true);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsEditable(false);
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <li className='todo-item'>
                <p contentEditable={isEditable} className={`todo-task ${isCompleted && 'completed'}`}> {todoTask} </p>
                <div className='button-container'>
                    <i role='button' className='fa fa-pencil' onClick={() => handleEdit(id)}></i>
                    <i role='button' className='fa fa-trash' onClick={() => handleDelete(id)}></i>
                    <i role='button' className='fa fa-check' onClick={() => handleComplete(id)}></i>
                </div>
            </li>
        </form>
    );
};

export default Todo;

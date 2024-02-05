import TodoModal from "../model/todo.ts";
import React, {FormEvent, useEffect, useRef, useState} from "react";

interface PropsType {
    todo: TodoModal,
    todos: TodoModal[],
    setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>
}

const Todo = ({todo, todos, setTodos}: PropsType) => {
    const {id, todo: todoTask, isCompleted} = todo;
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [updatedTodo, setUpdatedTodo] = useState<string>(todoTask);
    const todoRef = useRef(null);
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
    const handleEdit = () => {
        if (!isEditable && !isCompleted) {
            setIsEditable(true);

        }
    }
    const handleSave = () => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.todo = updatedTodo;
            }
            return todo;
        });
        setTodos(updatedTodos);
        setIsEditable(false);
    }

    useEffect(() => {
        todoRef.current?.focus();
    }, [isEditable]);

    return (
        <form>
            <li className='todo-item'>
                {isEditable && <input value={updatedTodo} onChange={e=> setUpdatedTodo(e.target.value)} className='update-todo-input' ref={todoRef} type="text"/>}
                {!isEditable && <p className={`todo-task ${isCompleted ? 'completed' : ''}`}> {todoTask} </p>}
                <div className='button-container'>
                    {isEditable && <i role='button' className='fa fa-save' onClick={handleSave}></i>}
                    {!isEditable && <i role='button' className='fa fa-pencil' onClick={handleEdit}></i>}
                    <i role='button' className='fa fa-trash' onClick={() => handleDelete(id)}></i>
                    <i role='button' className='fa fa-check' onClick={() => handleComplete(id)}></i>
                </div>
            </li>
        </form>
    );
};

export default Todo;

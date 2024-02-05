import TodoModal from "../model/todo.ts";
import React from "react";

interface PropsType {
    todo: TodoModal,
    todos: TodoModal[],
    setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>
}

const Todo = ({todo}: PropsType) => {
    return (
        <form>
            <li className='todo-item'>
                <p contentEditable className='todo-task'> {todo.todo} </p>
                <div className='button-container'>
                    <i role='button' className='fa fa-pencil'></i>
                    <i role='button' className='fa fa-trash'></i>
                    <i role='button' className='fa fa-check'></i>
                </div>
            </li>
        </form>
    );
};

export default Todo;

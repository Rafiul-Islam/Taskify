import TodoModal from "../model/todo.ts";
import React, {useEffect, useRef, useState} from "react";
import {Draggable} from "react-beautiful-dnd";

interface PropsType {
    index: number,
    todo: TodoModal,
    todos: TodoModal[],
    setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>
}

const Todo = ({index, todo, todos, setTodos}: PropsType) => {
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        todoRef.current?.focus();
    }, [isEditable]);

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided) => (
                    <form ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <li className='todo-item'>
                            {isEditable && <input value={updatedTodo} onChange={e => setUpdatedTodo(e.target.value)}
                                                  className='update-todo-input' ref={todoRef} type="text"/>}
                            {!isEditable && <p className={`todo-task ${isCompleted ? 'completed' : ''}`}> {todoTask} </p>}
                            <div className='button-container'>
                                {isEditable && <i role='button' className='fa fa-save' onClick={handleSave}></i>}
                                {(!isEditable && !todo.isCompleted) && <i role='button' className='fa fa-pencil' onClick={handleEdit}></i>}
                                <i role='button' className='fa fa-trash' onClick={() => handleDelete(id)}></i>
                                <i role='button' className='fa fa-check' onClick={() => handleComplete(id)}></i>
                            </div>
                        </li>
                    </form>
                )
            }
        </Draggable>
    );
};

export default Todo;

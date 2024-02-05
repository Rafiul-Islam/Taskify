import React from "react";
import TodoModal from "../model/todo.ts";
import Todo from "./Todo.tsx";

interface PropsType {
    todos: TodoModal[],
    setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>
}

const TodoList = ({todos, setTodos}: PropsType) => {
    return (
        <ul className='todos__container'>
            {todos.map((todo) =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />
            )}
        </ul>
    );
};

export default TodoList;

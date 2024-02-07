import React from "react";
import TodoModal from "../model/todo.ts";
import Todo from "./Todo.tsx";
import {Droppable} from "react-beautiful-dnd";

interface PropsType {
    todos: TodoModal[],
    setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>
    completedTodos: TodoModal[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>
}

const TodoList = ({todos, setTodos, completedTodos, setCompletedTodos}: PropsType) => {
    return (
        <div className='row mt-5'>
            <Droppable droppableId='ActiveTodoList'>
                {
                    (provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="col-lg-6">
                            <div className='todos__container active-todos'>
                                <h3>Active Tasks</h3>
                                <ul className='todo__list'>
                                    {todos.map((todo, index) =>
                                        <Todo
                                            index={index}
                                            key={todo.id}
                                            todo={todo}
                                            todos={todos}
                                            setTodos={setTodos}
                                        />
                                    )}
                                </ul>
                                {provided.placeholder}
                            </div>
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId='CompletedTodoList'>
                {
                    (provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="col-lg-6">
                            <div className='todos__container completed-todos'>
                                <h3>Completed Tasks</h3>
                                <ul className='todo__list'>
                                    {completedTodos.map((todo, index) =>
                                        <Todo
                                            index={index}
                                            key={todo.id}
                                            todo={todo}
                                            todos={completedTodos}
                                            setTodos={setCompletedTodos}
                                        />
                                    )}
                                </ul>
                                {provided.placeholder}
                            </div>
                        </div>
                    )
                }
            </Droppable>
        </div>
    );
};

export default TodoList;

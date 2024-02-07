import React, {useState} from "react";
import uniqid from 'uniqid';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import InputField from "./components/InputField.tsx";
import Todo from "./model/todo.ts";
import TodoList from "./components/TodoList.tsx";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

    const handleTodoAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            const todoObj: Todo = {
                id: uniqid(),
                todo: todo,
                isCompleted: false
            }
            setTodos(prevState => [...prevState, todoObj]);
            setTodo("");
        }
    }

    const handleDragEnd = (result: DropResult) => {
        const {source, destination} = result;

        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        let newAddition;
        const updatedTodos = [...todos];
        const updatedCompletedTodos = [...completedTodos];

        if (source.droppableId === "ActiveTodoList") {
            newAddition = updatedTodos[source.index];
            updatedTodos.splice(source.index, 1);
        } else {
            newAddition = updatedCompletedTodos[source.index];
            updatedCompletedTodos.splice(source.index, 1);
        }

        if (destination.droppableId === "ActiveTodoList") {
            newAddition.isCompleted = false;
            updatedTodos.splice(destination.index, 0, newAddition);
        } else {
            newAddition.isCompleted = true;
            updatedCompletedTodos.splice(destination.index, 0, newAddition);
        }
        setTodos(updatedTodos);
        setCompletedTodos(updatedCompletedTodos);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <main className='container mt-5'>
                <h1 className='heading'>Taskify</h1>
                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    todoAddHandler={handleTodoAdd}
                />
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    completedTodos={completedTodos}
                    setCompletedTodos={setCompletedTodos}
                />
            </main>
        </DragDropContext>
    );
};

export default App;

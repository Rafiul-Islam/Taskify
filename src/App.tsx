import React, {useState} from "react";
import uniqid from 'uniqid';
import InputField from "./components/InputField.tsx";
import Todo from "./model/todo.ts";
import Todos from "./components/Todos.tsx";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleTodoAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo){
            const todoObj: Todo = {
                id: uniqid(),
                todo: todo,
                isCompleted: false
            }
            setTodos(prevState => [...prevState, todoObj]);
            setTodo("");
        }
    }

    return (
        <main>
            <div>
                <h1 className='heading'>Taskify</h1>
                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    todoAddHandler={handleTodoAdd}
                />
                <Todos todos={todos}/>
            </div>
        </main>
    );
};

export default App;

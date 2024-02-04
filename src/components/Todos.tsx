import Todo from "../model/todo.ts";

interface PropsType {
    todos: Todo[]
}

const Todos = ({todos}: PropsType) => {
    return (
        <ul>
            {todos.map(({id, todo}) => <li key={id}>{todo}</li>)}
        </ul>
    );
};

export default Todos;

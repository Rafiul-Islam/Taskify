import Todo from "../model/todo.ts";

interface PropsType {
    todos: Todo[]
}

const Todos = ({todos}: PropsType) => {
    return (
        <ul className='todos__container'>
            {todos.map(({id, todo}) =>
                <li className='todo-item' key={id}>
                    <span className='todo-task'> {todo} </span>
                    <div>
                        <i role='button' className='fa fa-pencil'></i>
                        <i role='button' className='fa fa-trash'></i>
                        <i role='button' className='fa fa-check'></i>
                    </div>
                </li>
            )}
        </ul>
    );
};

export default Todos;

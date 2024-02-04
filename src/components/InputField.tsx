import React, {useRef} from "react";

interface PropType {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    todoAddHandler: (e: React.FormEvent) => void
}


const InputField = ({todo, setTodo, todoAddHandler}: PropType) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='form' onSubmit={e => {
            todoAddHandler(e);
            inputRef.current?.blur();
        }}>
            <input
                ref={inputRef}
                className='form__input'
                type='text'
                placeholder='Enter a Todo'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type='submit' className='form__submit-button'>Go</button>
        </form>
    );
};

export default InputField;

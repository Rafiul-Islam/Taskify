const InputField = () => {
    return (
        <form className='form'>
            <input
                className='form__input'
                type='text'
                placeholder='Enter a Todo'
            />
            <button type='button' className='form__submit-button'>Go</button>
        </form>
    );
};

export default InputField;

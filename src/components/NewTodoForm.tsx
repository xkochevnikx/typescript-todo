import { ChangeEvent } from 'react';

interface INewTodoFormProps {
    value: string;
    handleClick: (event: ChangeEvent<HTMLInputElement>) => void;
    addTodo: () => void;
}

export const NewTodoForm = (props: INewTodoFormProps) => {
    const { value, addTodo, handleClick } = props;
    return (
        <>
            <input
                type="text"
                placeholder="new todo"
                value={value}
                onChange={handleClick}
            />
            <button onClick={addTodo}>add todo</button>
        </>
    );
};

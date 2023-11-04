// import { ChangeEvent } from 'react';

import { useRef } from 'react';

interface INewTodoFormProps {
    // value: string;
    onClickHandler: (value: string) => void;
    // handleClick: (event: ChangeEvent<HTMLInputElement>) => void;
    // addTodo: () => void;
}

// todo - для оптимизации можно использовать реф и доставать текущее значение из неуправляемого инпута

export const NewTodoForm = (props: INewTodoFormProps) => {
    const {
        //  value,  handleClick, addTodo,
        onClickHandler,
    } = props;
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onClick = () => {
        if (inputRef.current) {
            onClickHandler(inputRef.current.value);
            inputRef.current.value = '';
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="new todo"
                ref={inputRef}
                onChange={() => {}}
                // value={value}
                // onChange={handleClick}
            />
            <button
                // onClick={addTodo}
                onClick={onClick}
            >
                add todo
            </button>
        </>
    );
};

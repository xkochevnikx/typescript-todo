import { CSSProperties, ReactNode } from 'react';
import { TTodo } from '../types';

interface TodoItemProps extends TTodo {
    removeTodo: (id: TTodo['id']) => void;
    toggleTodo: (id: TTodo['id']) => void;
    children?: ReactNode;
    style?: CSSProperties;
}

export const TodoItem = ({
    id,
    title,
    completed,
    style,
    toggleTodo,
    removeTodo,
}: TodoItemProps) => {
    return (
        <li style={style}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
            />
            <span>{title}</span>
            <span onClick={() => removeTodo(id)}>&times;</span>
        </li>
    );
};

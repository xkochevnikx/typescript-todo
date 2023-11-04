import { CSSProperties, ReactNode } from 'react';
import { TTodo } from '../types';

interface TodoItemProps extends TTodo {
    removeTodoItem: (id: TTodo['id']) => void;
    toggleTodoItem: (id: TTodo['id']) => void;
    children?: ReactNode;
    style?: CSSProperties;
}

export const TodoItem = ({
    id,
    title,
    completed,
    style,
    toggleTodoItem,
    removeTodoItem,
}: TodoItemProps) => {
    return (
        <li style={style}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodoItem(id)}
            />
            <span>{title}</span>
            <span onClick={() => removeTodoItem(id)}>&times;</span>
        </li>
    );
};

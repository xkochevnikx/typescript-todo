import { CSSProperties, ReactNode } from 'react';
import { TTodo } from '../types';

interface TodoItemProps extends TTodo {
    children?: ReactNode;
    style?: CSSProperties;
}

export const TodoItem = ({ id, title, completed, style }: TodoItemProps) => {
    return (
        <li style={style}>
            <input type="checkbox" checked={completed} onChange={() => {}} />
            <span>{title}</span>
            <span>&times;</span>
        </li>
    );
};

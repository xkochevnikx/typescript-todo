import { CSSProperties, ReactNode } from 'react';

interface TodoItemProps {
    id: string;
    title: string;
    completed: boolean;
    children?: ReactNode;
    style?: CSSProperties;
}

export const TodoItem = ({ id, title, completed, style }: TodoItemProps) => {
    return (
        <li style={style}>
            <input type="checkbox" checked={completed} />
            <span>{title}</span>
            <span>&times;</span>
        </li>
    );
};

import { CSSProperties } from 'react';
import { TTodo } from '../types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
    todos: TTodo[];
    removeTodo: (id: TTodo['id']) => void;
    toggleTodo: (id: TTodo['id']) => void;
    style?: CSSProperties;
}

export const TodoList = ({
    todos,
    style,
    removeTodo,
    toggleTodo,
}: TodoListProps) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    style={style}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </ul>
    );
};

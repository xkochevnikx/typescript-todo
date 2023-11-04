import { CSSProperties } from 'react';
import { TTodo } from '../types';
import { TodoItem } from './TodoItem';
import { useAppDispatch } from '../reduxHooks';
import { removeTodo, toggleTodo } from '../store/todosSlice';
import { todosSelectors } from '../store/todosSelector';
import { useSelector } from 'react-redux';

interface TodoListProps {
    style?: CSSProperties;
}

export const TodoList = ({ style }: TodoListProps) => {
    const todos = useSelector(todosSelectors);

    const dispatch = useAppDispatch();

    const removeTodoItem = (id: TTodo['id']) => {
        dispatch(removeTodo(id));
    };

    const toggleTodoItem = (id: TTodo['id']) => {
        dispatch(toggleTodo(id));
    };

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    style={style}
                    removeTodoItem={removeTodoItem}
                    toggleTodoItem={toggleTodoItem}
                />
            ))}
        </ul>
    );
};

import { useEffect } from 'react';
import { useAppDispatch } from '../store/reduxHooks';
import { asyncTodosSelectors } from '../store/todosSelector';
import { useSelector } from 'react-redux';
import { asyncThunkTodos } from '../store/asyncTodosActions';

export const AsyncTodoList = () => {
    const todos = useSelector(asyncTodosSelectors);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(asyncThunkTodos());
    }, []);

    // const removeTodoItem = (id: TTodo['id']) => {
    //     dispatch(removeTodo(id));
    // };

    // const toggleTodoItem = (id: TTodo['id']) => {
    //     dispatch(toggleTodo(id));
    // };

    return (
        <ul>
            {/* {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    style={style}
                    removeTodoItem={removeTodoItem}
                    toggleTodoItem={toggleTodoItem}
                />
            ))} */}
        </ul>
    );
};

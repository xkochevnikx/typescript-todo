import { asyncCreateTodo } from '../store/asyncTodosActions';
import { useAppDispatch } from '../store/reduxHooks';
import { NewTodoForm } from './NewTodoForm';

export const NewAsyncTodoItem = () => {
    const dispatch = useAppDispatch();

    const onClickHandler = (text: string) => {
        dispatch(asyncCreateTodo(text));
    };

    return <NewTodoForm onClickHandler={onClickHandler} />;
};

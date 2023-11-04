import { useAppDispatch } from '../reduxHooks';
import { addTodo } from '../store/todosSlice';
import { NewTodoForm } from './NewTodoForm';

export const NewTodoItem = () => {
    const dispatch = useAppDispatch();

    const onClickHandler = (text: string) => {
        dispatch(addTodo(text));
    };
    return <NewTodoForm onClickHandler={onClickHandler} />;
};

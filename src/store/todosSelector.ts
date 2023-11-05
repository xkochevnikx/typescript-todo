import { RootState } from './store';

export const todosSelectors = (state: RootState) => state.todos;

export const asyncTodosSelectors = (state: RootState) => state.asyncTodos;

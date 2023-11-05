import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosSlice from './todosSlice';
import asyncTodosSlice from './asyncTodosSlice';

const rootReducer = combineReducers({
    todos: todosSlice,
    asyncTodos: asyncTodosSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

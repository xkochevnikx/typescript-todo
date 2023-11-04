import { configureStore } from '@reduxjs/toolkit';
import TodosSlice from 'features/todosSlice';

export const store = configureStore({
    reducer: {
        todos: TodosSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

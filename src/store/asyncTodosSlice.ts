import { createSlice } from '@reduxjs/toolkit';
import { asyncCreateTodo, asyncThunkTodos } from './asyncTodosActions';
import { TTodo } from '../types';

type TasyncTodosSliceTypes = {
    todos: TTodo[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: TasyncTodosSliceTypes = {
    todos: [],
    loading: 'idle',
};

const asyncTodosSlice = createSlice({
    name: 'asyncTodosSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(asyncThunkTodos.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(asyncThunkTodos.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.todos = action.payload;
            })
            .addCase(asyncCreateTodo.fulfilled, (state, action) => {
                state.todos = [...state.todos, action.payload];
            });
    },
});

export default asyncTodosSlice.reducer;

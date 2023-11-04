import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TTodo } from '../types';

const initialState: TTodo[] = [];

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: TTodo = {
                id: Date.now().toString(),
                title: action.payload,
                completed: false,
            };
            return [...state, newTodo];
        },
        toggleTodo: (state, action: PayloadAction<TTodo['id']>) => {
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                } else {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
            });
        },
        removeTodo: (state, action: PayloadAction<TTodo['id']>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;

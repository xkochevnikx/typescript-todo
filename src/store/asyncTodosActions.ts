import { createAsyncThunk } from '@reduxjs/toolkit';
import { TTodo } from '../types';

export const asyncThunkTodos = createAsyncThunk<TTodo[], undefined>(
    'asyncThunkTodos',
    async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos'
            );

            return await response.json();
        } catch (error) {
            throw new Error('error');
        }
    }
);

export const asyncCreateTodo = createAsyncThunk<TTodo, string>(
    'asyncCreateTodo',
    async (text) => {
        const newTodo: Required<Omit<TTodo, 'id'>> = {
            title: text,
            userId: 1,
            completed: false,
        };
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(newTodo),
                }
            );

            return await response.json();
        } catch (error) {
            throw new Error('error');
        }
    }
);

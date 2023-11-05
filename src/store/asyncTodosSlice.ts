import { createSlice } from '@reduxjs/toolkit';

type TasyncTodosSliceTypes = {
    todos: [];
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
    extraReducers: {},
});

export default asyncTodosSlice.reducer;

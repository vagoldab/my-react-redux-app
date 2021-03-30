import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {},
    reducers: {
        addTodo: (state, action) => {
            const { id, todoText } = action.payload;
            state[id] = ({id: id, todoText: todoText, isDone: false});
        },
        removeTodo: (state, action) => {
            delete state[action.payload.id];
        },
        toggleIsDone: (state, action) => {
            const id = action.payload.id;
            state[id].isDone = (state[id].isDone) ? false : true;
        }
    }
})

export const { addTodo, removeTodo, toggleIsDone } = todoSlice.actions;
export const selectTodos = state => state.todo; 
export default todoSlice.reducer;
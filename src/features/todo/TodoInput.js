import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { v4 as uuidv4 } from "uuid";
import styles from './Todo.module.css';

export function TodoInput() {
    const [todoInput, setTodoInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(todoInput){
            dispatch(addTodo({
                id: uuidv4(), 
                todoText: todoInput
            }))
        }

        setTodoInput('');
    }
        

    return (
        <div className={styles.todoinputconainer}>
            <form onSubmit={handleSubmit} className={styles.todoinputconainer}>
                <input type="text" className={styles.textbox} value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
                <input type="submit" className={styles.button} value="Add todo" />
            </form>
        </div>
    )
}
import React from "react";
import styles from './Todo.module.css';

export function Todo({handleRemove, todo, handleToggleIsDone }) {

    return (
        <div style={(todo.isDone) ? {backgroundColor: "#3adaa2"} : {backgroundColor: "rgba(233, 233, 233, 0.3)"}} className={styles.row} >
            <p className={styles.todotextbox}  >{todo.todoText}</p>
            <div>
                <button className={styles.button} value={todo.id} onClick={handleRemove}  >Remove</button>
                <button className={styles.button} value={todo.id} onClick={handleToggleIsDone}  >Done</button>
            </div>

        </div>
    ); 
}
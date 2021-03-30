import React from "react";
import { AllTodos } from "./AllTtodos";
import { TodoInput } from "./TodoInput";
import styles from "./Todo.module.css";

export function TodoContainer() {
    return (
        <div className={styles.containerrow}>
            <TodoInput />
            <AllTodos /> 
        </div>
    );
}
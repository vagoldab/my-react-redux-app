import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "./Todo";
import { removeTodo, selectTodos, toggleIsDone } from "./todoSlice";
import styles from "./Todo.module.css";

export function AllTodos() {
    const allTodos = useSelector(selectTodos);
    const dispatch = useDispatch();

    if(allTodos.length < 1) {
        return <h1>All Todos</h1>;
    }

    const handleRemove = (event) => {
        dispatch(removeTodo({id: event.target.value}));
    };

    const handleToggleIsDone = (event) => {
        dispatch(toggleIsDone({id: event.target.value}));
    };

    return (
        <div className={styles.todoconainer}>
            <h3 className={styles.h3}>All Todos</h3>
            <div className={styles.underline}></div>
            <div>
                {Object.values(allTodos).map(todo => {
                    return <Todo 
                            todo={todo} 
                            handleRemove={handleRemove} 
                            handleToggleIsDone={handleToggleIsDone} 
                            key={todo.id} 
                            />;
                })}
            </div>
        </div>
    );
}
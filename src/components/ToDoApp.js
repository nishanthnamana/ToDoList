import React, { useState, useRef } from "react";
import "./ToDoApp.css";

const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);
    const inputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        if (inputRef.current.value === "") {
            window.alert("Please Enter a Task");
            return;
        }

        const newTask = {
            id: Math.random() * 1000,
            task: inputRef.current.value,
        };

        setTasks((prevState) => {
            return [newTask, ...prevState];
        });

        inputRef.current.value = "";
    };

    const deleteHandler = (id) => {
        const newArray = tasks.filter((task) => task.id !== id);
        setTasks(newArray);
    };

    return (
        <div>
            <h1 className="todoHeading">ToDo List</h1>
            <form className="inputForm" onSubmit={submitHandler}>
                <input type="text" placeholder="Enter a Task" ref={inputRef} />
                <button type="submit">Add</button>
            </form>
            <ul className="taskList">
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.task}</span>
                        <span
                            className="taskComplete"
                            onClick={() => deleteHandler(task.id)}
                        >
                            ❌
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoApp;

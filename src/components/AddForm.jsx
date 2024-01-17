import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch(); ("");

    const submitHandler = (e) => {
        e.preventDefault();
        setTask("");
        //action is passed in dispatch and we have give value of payload as argument
        dispatch(addTodo(task));
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => setTask(e.target.value)} ></input>
                <button type="submit">Add Task</button>
            </form>
        </>

    );
}
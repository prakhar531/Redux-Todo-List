import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        dispatch(deleteTodo(id));
    }
    const clickDone = (id) => {
        dispatch(markAsDone(id));
    }
    return (
        <div>
            <h2>Todo app</h2>
            <AddForm />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                                {todo.task}
                            </span>&nbsp;&nbsp;
                            <button onClick={() => clickHandler(todo.id)}>Delete</button>
                            <button onClick={() => clickDone(todo.id)}>Mark As Done</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
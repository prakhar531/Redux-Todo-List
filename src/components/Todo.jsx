import { useSelector } from "react-redux";
import AddForm from "./AddForm";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    return (
        <div>
            <h2>Todo app</h2>
            <AddForm />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.task}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
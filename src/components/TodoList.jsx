import { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 0, content: "잠자기", status: true },
    { id: 1, content: "달리기", status: true },
  ]);

  return (
    <section>
      <ul>
        {todos.map((todo) => {
          <Todo id={todo.id} todo={todo} />;
        })}
      </ul>
    </section>
  );
}

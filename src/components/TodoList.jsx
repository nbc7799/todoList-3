import { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 0, content: "잠자기", status: true },
    { id: 1, content: "달리기", status: true },
  ]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleDelete = (todo) => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

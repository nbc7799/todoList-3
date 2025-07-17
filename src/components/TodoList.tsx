import { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export interface TodoType {
  id: number;
  content: string;
  status: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 0, content: "잠자기", status: true },
    { id: 1, content: "달리기", status: true },
  ]);

  const handleAdd = (todo: TodoType) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // const handleStatus = () => {};

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

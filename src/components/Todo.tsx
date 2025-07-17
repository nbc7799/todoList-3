import { TodoType } from "./TodoList";

export interface TodoItemProps {
  todo: TodoType;
  onDelete: (id: number) => void;
}

export default function Todo({ todo, onDelete }: TodoItemProps) {
  const handleDelete = () => {
    onDelete(todo.id);
    console.log(todo);
  };

  return (
    <div className="flex">
      <input type="checkbox" />
      <li>{todo.content}</li>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default function Todo({ todo, onDelete }) {
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <div className="flex">
      <input type="checkbox" />
      <li>{todo.content}</li>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

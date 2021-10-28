const Todo = ({ text, todo, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };
  return (
    <li>
      {text}
      <i className="material-icons red-text right" onClick={handleDelete}>
        close{" "}
      </i>
    </li>
  );
};

export default Todo;

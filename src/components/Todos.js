import Todo from "./Todo";

const Todos = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <ul className="todos">
      {todos.map(todo => (
        <Todo
          text={todo.text}
          key={todo.id}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};

export default Todos;

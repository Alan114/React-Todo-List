const Form = ({ input, setInput, todos, setTodos }) => {
  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 100 },
    ]);
    setInput("");
  };
  return (
    <div>
      <h2 className="blue-text center-align">Todo List</h2>
      <form className="addTodo center-align" onSubmit={handleSubmit}>
        <label className="blue-text text-lighten-2">Add a new todo</label>
        <input
          className="form-input"
          type="text"
          name="add"
          onChange={handleChange}
          value={input}
        />
      </form>
    </div>
  );
};

export default Form;

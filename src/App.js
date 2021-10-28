import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>Alan's Todo List</h1>
      <Form
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

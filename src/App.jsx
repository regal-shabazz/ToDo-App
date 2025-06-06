import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
    const [todos, setTodos] = useState(() => {
    const raw = localStorage.getItem("appData");
    return raw ? JSON.parse(raw) : [];
  });
  const [selectedTab, setSelectedTab] = useState("All");

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodos);
  };

  const handleDeleteTodo = (indexToDelete) => {
    const newTodos = [...todos]
    newTodos.filter((todo, index) => index != indexToDelete);

    setTodos(newTodos);
  };

  const handleCompleteTodo = (completedTodoIndex) => {
    const newTodos = [...todos];
    newTodos[completedTodoIndex].complete =
      !newTodos[completedTodoIndex].complete;
    setTodos(newTodos);
  };

  useEffect(() => {
    const appData = [...todos];
    localStorage.setItem("appData", JSON.stringify(appData));
  }, [todos]);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;

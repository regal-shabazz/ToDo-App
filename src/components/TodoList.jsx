import { TodoCard } from "./TodoCard";

export const TodoList = (props) => {
  const { todos, selectedTab, handleCompleteTodo, handleDeleteTodo } = props;
  const filteredList = selectedTab === "All" ? todos : selectedTab === "Open" ? todos.filter(val => !val.complete) : todos.filter(val => val.complete)


  return (
    <>
      {filteredList.map((todo, todoIndex) => {
        return (
            <TodoCard key={todoIndex} todoIndex={todoIndex} todo={todo} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo}/>
        )
      })}
    </>
  );
};

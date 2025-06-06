export const TodoCard = (props) => {
  const { todoIndex, todo, handleCompleteTodo, handleDeleteTodo } = props;

  return (
    <div className="card todo-item">
      <h4>{todoIndex + 1}. {todo.input}</h4>
      <div className="todo-buttons">
        <button onClick={() => {
          handleCompleteTodo(todoIndex)
        }} disabled={todo.complete}>Done</button>
        <button onClick={() => {
          handleDeleteTodo(todoIndex)
        }}>Delete</button>
      </div>
    </div>
  );
};

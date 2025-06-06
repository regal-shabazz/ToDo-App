export const Header = (props) => {
  const { todos } = props;
  const numberOfTodos = todos.length
  const isNumberOfTodosGreaterThanOne = numberOfTodos != 1
  const taskOrTasks = isNumberOfTodosGreaterThanOne ? 'tasks' : 'task'
  
  return (
    <header>
      <h1 className="text-gradient">You have {numberOfTodos}  {taskOrTasks}</h1>
    </header>
  );
};


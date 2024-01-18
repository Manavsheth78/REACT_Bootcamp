import AppName from "./components/AppName";
import Todo from "./components/Todo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      duedate: "4/10/2023",
    },
    {
      name: "Go to College",
      duedate: "4/10/2023",
    },
    {
      name: "React LIT 🔥",
      duedate: "right now!",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <Todo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;

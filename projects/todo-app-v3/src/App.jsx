import AppName from "./components/AppName";
import Todo from "./components/Todo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import "./App.css";
function App() {
  const initialTodoItems = [
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(itemName, itemDueDate);
  };
  return (
    <center className="todo-container">
      <AppName />
      <Todo onNewItem={handleNewItem} />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;

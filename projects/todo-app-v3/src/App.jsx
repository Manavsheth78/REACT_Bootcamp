import AppName from "./components/AppName";
import Todo from "./components/Todo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import { useState } from "react";
import "./App.css";
function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     duedate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     duedate: "4/10/2023",
  //   },
  //   {
  //     name: "React LIT 🔥",
  //     duedate: "right now!",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = {
      name: itemName,
      duedate: itemDueDate,
    };
    const updatedTodoItems = [...todoItems, newTodoItem];
    setTodoItems(updatedTodoItems);
  };

  const handleDeleteButton = (todoName) => {
    console.log(todoName);
    console.log(todoItems);
    setTodoItems(todoItems.filter((item) => item.name !== todoName));
  };
  return (
    <center className="todo-container">
      <AppName />
      <Todo onNewItem={handleNewItem} />
      <WelcomeMsg todoItems={todoItems} />
      <TodoItems todoItems={todoItems} DeleteEle={handleDeleteButton} />
    </center>
  );
}

export default App;

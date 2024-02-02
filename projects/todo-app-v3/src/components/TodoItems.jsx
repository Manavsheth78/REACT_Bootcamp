import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, DeleteEle }) => {
  return (
    <div className={styles["items-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          DeleteEle={DeleteEle}
          todoDate={item.duedate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;

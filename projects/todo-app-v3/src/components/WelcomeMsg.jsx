import React from "react";

const WelcomeMsg = ({ todoItems }) => {
  return (
    <>
      <h1>Welcome to the TODO APP</h1>
      {todoItems.length === 0 ? <h2> NO TASK ADDED </h2> : null}
    </>
  );
};

export default WelcomeMsg;

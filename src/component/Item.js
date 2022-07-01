import React, { useEffect, useState } from "react";
import Showtodo from "./Showtodo";

const Item = (data) => {
  const [todos, setTodo] = useState([]);
  console.log(todos);

  useEffect(() => {
    fetch(`https://arctic-leaf-29200.herokuapp.com/todoList`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [data]);
  return (
    <div className="">
      {todos.map((todo) => (
        <Showtodo key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default Item;

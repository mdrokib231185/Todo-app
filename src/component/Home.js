import React, { useEffect, useState } from "react";
import Showtodo from "./Showtodo";

const Home = () => {
  const [todos, setTodo] = useState([]);
  console.log(todos);

  useEffect(() => {
    fetch(`https://arctic-leaf-29200.herokuapp.com/todoList`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  return (
    <div>
      <div className="container">
        {todos.slice(0, 6).map((todo) => (
          <Showtodo key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Home;

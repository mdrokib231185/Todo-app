import React, { useEffect, useState } from 'react';
import Showtodo from './Showtodo';


const Item = () => {
      const [todos, setTodo] = useState([]);
      console.log(todos);

      useEffect(() => {
        fetch(`http://localhost:5000/todoList`)
          .then((res) => res.json())
          .then((data) => setTodo(data));
      }, []);
      return (
        <div className="">
          {todos.map((todo) => (
            <Showtodo key={todo._id} todo={todo} />
          ))}
          
        </div>
      );
};

export default Item;
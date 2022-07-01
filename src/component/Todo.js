import React, { useEffect, useState } from "react";
import Item from "./Item";

import { useForm } from "react-hook-form";

const Todo = () => {
  const { register, reset, handleSubmit } = useForm();
  const [text, setText] = useState("");
  console.log(text);

  const onSubmit = (data) => {
    const url = "https://arctic-leaf-29200.herokuapp.com/todoList";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          reset();
        }
      });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-3xl ">TO DO APP</h1>
        <div className="top">
          <form onKeyPress={handleKeyPress} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Write Something..."
              {...register("text", {
                required: {
                  value: true,
                  message: "name is Required",
                },
              })}
            />
            <input
              className="btn  btn-primary text-white"
              type="submit"
              value="ADDED"
            />
          </form>
        </div>
        <div className="list">
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Todo;

import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import { useForm } from "react-hook-form";

const Todo = () => {
      const {register, reset, handleSubmit } = useForm();
      const [text, setText] = useState("");
      console.log(text);
      const [todo, setTodo] = useState([]);
      const [update, setUpdate] = useState([])


       const onSubmit = (data) => {
         const url = "http://localhost:5000/todoList";
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
             }
           });
       };




  return (
    <div>
      <div className="container">
        <h1>TO DO APP</h1>
        <div className="top">
          <form onSubmit={handleSubmit(onSubmit)}>
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
              className="btn w-96 btn-primary text-white"
              type="submit"
              value="ADDED"
            />
          </form>
        </div>
        <div className="list">
          <Item/>
        </div>
      </div>
    </div>
  );
};

export default Todo;

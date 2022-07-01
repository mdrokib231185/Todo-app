import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Update = () => {
  const { register, reset, handleSubmit } = useForm();
  const { id } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/todoList/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
      
  const handelAdd = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
        const updateItems = { text };
        console.log(text);

    const url = `http://localhost:5000/todoList/${id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateItems),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
            }
          });
  };;

  return (
    <div className="container">
      Updating Task: {items.text}
      <form onSubmit={handelAdd}>
        <input
          type="text"
          placeholder="Update Here"
          name="text"
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
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;

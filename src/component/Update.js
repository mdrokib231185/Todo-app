import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Update = (data) => {
  const { register, reset } = useForm();
  const { id } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    const url = `https://arctic-leaf-29200.herokuapp.com/todoList/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [data]);

  const handelAdd = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    const updateItems = { text };
    console.log(text);

    const url = `https://arctic-leaf-29200.herokuapp.com/todoList/${id}`;
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
          reset();
        }
      });
  };

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

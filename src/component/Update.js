import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Update = () => {
        const { register, reset, handleSubmit } = useForm();
      const { id } = useParams()
      const [ items, setItems ] = useState({})
      
      useEffect(() => {
            const url = `http://localhost:5000/todoList/${id}`;
            fetch(url)  
                  .then(res => res.json())
            .then(data=> setItems(data))
      }, [])
      
        const onSubmit = (data) => {
           const url = `http://localhost:5000/todoList/${id}`;
          fetch(url, {
            method: "PUT",
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
        <div className='container'>
          Updating user: {items.text}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder={items.text}
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
import React from "react";
import { Link } from "react-router-dom";

const Showtodo = ({ todo }) => {
  const { text, _id } = todo;
  return (
    <div className="item">
      <div className="text">{text}</div>
      <div className="icon">
        <Link to={`/update/${(text, _id)}`}>
          <i class="ri-edit-2-fill"></i>
        </Link>
        <i class="ri-task-line"></i>
      </div>
    </div>
  );
};

export default Showtodo;

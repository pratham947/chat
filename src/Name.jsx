import React, { useState } from "react";
import "./Name.css";
import { Link } from "react-router-dom";
const Name = () => {
  const [name, setName] = useState("");
  return (
    <div className="container">
      <div className="small-container">
        <h1>New User</h1>
        <div className="input-box">
          <p>Name</p>
          <input
            type="text"
            placeholder="Type your name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Link to={"/message"} state={{name}}>
          <button className="enter-room">Enter</button>
        </Link>
      </div>
    </div>
  );
};

export default Name;

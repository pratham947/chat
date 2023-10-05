import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import "./message.css";
const Message = () => {
  const [userID, setUserID] = useState("");
  const [message, setMessage] = useState(""); 
  const socket = io("http://localhost:3001");
  const {
    state: { name },
  } = useLocation();
  const currentdiv = useRef();
  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("user-name", name);
      socket.on("client-message", ({ message, id }) => {
        createAndSendMessage("client-message", message);
      });
    });
  }, []);

  const createAndSendMessage = (type, message) => {
    const div = document.createElement("div");
    div.classList.add(type);
    const p = document.createElement("p");
    p.textContent = message;
    div.appendChild(p);
    currentdiv.current.appendChild(div);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const messageObj = { message, id: userID };
    socket.emit("my-message", messageObj);
    createAndSendMessage("my-message", message);
    setMessage("");
  };
  return (
    <div className="message-container">
      <div className="message-main-container">
        <div className="users"></div>
        <div className="messages-section">
          <div className="messages" ref={currentdiv}></div>
          <div className="message-box">
            <input
              type="text"
              placeholder="Type your message..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

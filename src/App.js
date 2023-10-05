import React from "react";
import Name from "./Name";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Message from "./Message";
function App() {
  return (
    <RouterProvider router={router} />
  );
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Name/>
  },
  {
    path:"/message",
    element:<Message/>
  }
]);

export default App;

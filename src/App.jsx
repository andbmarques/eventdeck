import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AuthContext from "./Context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  let [token, setToken] = useState();

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;

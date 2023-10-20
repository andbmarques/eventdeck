import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AuthContext from "./Context/AuthContext";
import ProfilePage from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import CreateEvent from "./Pages/CreateEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/createevent",
    element: <CreateEvent />
  }
]);

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) ?? ""
  );
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userId")) ?? ""
  );

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userId", JSON.stringify(userId));
  }, [token, userId]);

  return (
    <AuthContext.Provider value={{ token, setToken, userId, setUserId }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;

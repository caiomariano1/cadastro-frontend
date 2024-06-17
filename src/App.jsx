import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Edit from "./pages/Edit/Edit";
// import { useAuth } from "./hooks/useAuth";
// import { onAuthStateChanged } from "firebase/auth";

function App() {
  // const [user, setUser] = useState(undefined);
  // const { auth } = useAuth();

  // const loadingUser = user === undefined;

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });
  // }, [auth]);

  // if (loadingUser) {
  //   return <p>Carregando...</p>;
  // }

  return (
    // <AuthProvider value={{ user }}>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Post />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;

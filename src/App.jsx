import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "./hooks/useAuth";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Edit from "./pages/Edit/Edit";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuth();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!user ? <Login /> : <Navigate to="/home" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/home" />}
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/post"
            element={user ? <Post /> : <Navigate to="/home" />}
          />
          <Route
            path="/edit/:id"
            element={user ? <Edit /> : <Navigate to="/home" />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

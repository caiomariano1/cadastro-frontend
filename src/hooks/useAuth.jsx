import { app } from "../Services/firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled();

    setloading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user);

      setloading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemError;

      if (error.message.includes("Password")) {
        systemError = "A senha deve ter no mínino 6 caracteres";
      } else error.message.includes("email-already");
      systemError = "Email já cadastrado";

      //   else {
      //     systemError = "ocorreu um erro, tente novamente";
      //   }

      setloading(false);
      setError(systemError);
    }
  };

  const logout = () => {
    checkIfIsCancelled();

    signOut(auth);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { auth, createUser, error, loading, logout };
};

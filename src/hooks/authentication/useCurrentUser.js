import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

import auth from "@/lib/firebase/auth";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setCurrentUser(user) : setCurrentUser(null);
    });
  }, []);

  return { currentUser };
};

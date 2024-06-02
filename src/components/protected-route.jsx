import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import auth from "@/lib/firebase/auth";

export default function ProtectedRoute({ children }) {
  const currentUser = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login", { replace: true });
    }
  }, [currentUser, navigate]);

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

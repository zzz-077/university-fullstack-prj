import React, { useEffect } from "react";
import {
  Outlet,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
export default function AuthRequired() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogged = false;

  useEffect(() => {
    if (!isLogged) {
      navigate("/signin");
    }
  }, []);

  if (!location.pathname.includes("/signin") && !isLogged) {
    return (
      <Navigate
        to="/signin"
        state={{
          message: "You must log in first!",
          prevLoc: location.pathname,
        }}
        replace
      />
    );
  }

  return <Outlet />;
}

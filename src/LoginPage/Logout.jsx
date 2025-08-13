// LogoutButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();

    // Prevent back navigation
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", () => {
      window.history.pushState(null, "", window.location.href);
    });

    navigate("/login", { replace: true });
  };

  const buttonStyle = {
    backgroundColor: "#ff4d4f",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "12px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const hoverStyle = {
    backgroundColor: "#e04344",
    transform: "scale(1.05)",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onClick={handleLogout}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      🚪 Logout
    </button>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { colors, shadows, spacing, typography, borderRadius } from "../styles/theme";
import Button from "./Button";

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    
    checkScreenSize();
    

    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!currentUser) {
    return null;
  }

  const getRoleColor = () => {
    switch (currentUser.role) {
      case "Admin": return "#ff5722";
      case "Editor": return "#2196f3";
      case "Viewer": return "#4caf50";
      default: return colors.primary;
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkStyle = (path: string) => ({
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.md,
    backgroundColor: isActive(path) ? getRoleColor() : "transparent",
    color: isActive(path) ? colors.white : colors.dark,
    fontWeight: typography.fontWeights.medium,
    textDecoration: "none",
    display: "block",
    marginBottom: isMobile ? spacing.sm : 0,
  });

  return (
    <nav style={{
      padding: `${spacing.md} ${spacing.lg}`,
      // backgroundColor: colors.white,
      backgroundColor: "#fff",
      boxShadow: shadows.sm,
      marginBottom: spacing.xl,
      position: "sticky",
      top: 0,
      zIndex: 100,
      width: "100%",
    }}>
      {/* Main container */}
      <div style={{ 
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        width: "100%",
      }}>
        {/* Logo and menu toggle row */}
        <div style={{ 
          display: "flex", 
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}>
          <div style={{
            fontSize: typography.fontSizes.xl,
            fontWeight: typography.fontWeights.bold,
            color: '#121212',
          }}>
            The Effects Blog
          </div>
          
          {/* Mobile menu button */}
          {isMobile && (
            <button 
              onClick={toggleMenu}
              style={{
                background: "none",
                border: "none",
                fontSize: typography.fontSizes.lg,
                cursor: "pointer",
                padding: spacing.sm,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* Navigation links and user info - responsive container */}
        <div style={{
          display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          width: "100%",
          marginTop: isMobile ? spacing.md : 0,
        }}>
          {/* Navigation Links */}
          <div style={{ 
            display: "flex", 
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 0 : spacing.md,
            width: isMobile ? "100%" : "auto",
          }}>
            <Link to="/dashboard" style={linkStyle("/dashboard")}>
              Home
            </Link>
            <Link to="/profile" style={linkStyle("/profile")}>
              Profile
            </Link>
            {currentUser.role === "Admin" && (
              <Link to="/settings" style={linkStyle("/settings")}>
                Settings
              </Link>
            )}
          </div>

          {/* User info and logout */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: spacing.md,
            marginTop: isMobile ? spacing.md : 0,
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "space-between" : "flex-end",
          }}>
            <div style={{ 
              display: "flex",
              alignItems: "center",
              gap: spacing.sm,
              flexWrap: "wrap",
            }}>
              <div style={{ 
                width: "32px", 
                height: "32px", 
                borderRadius: borderRadius.circle, 
                backgroundColor: "#e6e6e6",
                color: '#121212',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: typography.fontSizes.sm,
                fontWeight: typography.fontWeights.bold,
              }}>
                {currentUser?.username.charAt(0).toUpperCase()}
              </div>
              <span style={{ fontWeight: typography.fontWeights.medium }}>
                {currentUser.username}
              </span>
              <span style={{ 
                backgroundColor: getRoleColor(),
                color: colors.white,
                padding: `${spacing.xs} ${spacing.sm}`,
                borderRadius: borderRadius.sm,
                fontSize: typography.fontSizes.xs,
                fontWeight: typography.fontWeights.medium,
              }}>
                {currentUser.role}
              </span>
            </div>
            <Button variant="light" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

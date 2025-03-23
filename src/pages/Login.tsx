import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { User } from "../types/types";
import { colors, spacing, typography } from "../styles/theme";
import Button from "../components/Button";
import Card from "../components/Card";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"Admin" | "Editor" | "Viewer">("Viewer");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      const user: User = { username, role };
      login(user);
      navigate("/dashboard");
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      minHeight: "100vh",
      background: `#f9f9f9`,
    }}>
      <Card 
        variant="elevated" 
        style={{ 
          width: "100%", 
          maxWidth: "400px",
          borderRadius: "0",
          padding: "40px"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: spacing.xl }}>
          <h1 style={{ 
            fontSize: typography.fontSizes.xxl,
            color: '#121212',
            marginBottom: spacing.sm
          }}>
            The Effect's Blog!
          </h1>
          <p style={{ color: colors.gray }}>Please sign in to continue</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: spacing.lg }}>
            <label htmlFor="username" style={{ 
              display: "block", 
              marginBottom: spacing.sm,
              fontWeight: typography.fontWeights.medium,
            }}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ 
                width: "100%", 
                padding: spacing.md,
                // borderRadius: borderRadius.md,
                border: `1px solid ${colors.grayLight}`,
                fontSize: typography.fontSizes.md,
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div style={{ marginBottom: spacing.xl }}>
            <label htmlFor="role" style={{ 
              display: "block", 
              marginBottom: spacing.sm,
              fontWeight: typography.fontWeights.medium,
            }}>
              Role?
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as "Admin" | "Editor" | "Viewer")}
              style={{ 
                width: "100%", 
                padding: spacing.md,
                // borderRadius: borderRadius.md,
                border: `1px solid ${colors.grayLight}`,
                fontSize: typography.fontSizes.md,
                outline: "none",
                transition: "border-color 0.2s",
                appearance: "none",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1em",
              }}
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            fullWidth
            style={{
              padding: spacing.md,
              fontSize: typography.fontSizes.md,
              fontWeight: typography.fontWeights.semibold,
            }}
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
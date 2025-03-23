// File: src/pages/Dashboard.tsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import { colors, spacing, typography } from "../styles/theme";

const AdminDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  
  return (
    <Card>
      <h2>Hello Admin, {currentUser?.username}!</h2>
      <div>
      <div style={{ display: "flex", alignItems: "center",justifyContent: "space-between", padding: "10px", backgroundColor: "#f8f9fa" }}>
          <span>Total Users: 201</span>
          <span>Total posts: 345</span>
        </div>
      </div>
    </Card>);
};

const EditorDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  
  return (
   <div className="container">
    <Card>
      <h3>Hello Editor, {currentUser?.username}</h3>
    </Card>
   </div>
  );
};

const ViewerDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  
  return (
    <Card>
      <h2>Hello {currentUser?.username}!</h2>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  
  return (
    <div>
      <Navbar />
      <div style={{ 
        maxWidth: "1200px",
        margin: "0 auto",
        padding: `${spacing.xl} ${spacing.lg}`,
      }}>
        {/* <h1 style={{ 
          fontSize: typography.fontSizes.xxl,
          fontWeight: typography.fontWeights.bold,
          marginBottom: spacing.xl,
          color: colors.textPrimary,
          fontFamily: 'Montserrat'
        }}>
          Dashboard
        </h1> */}
        
        {currentUser?.role === "Admin" && <AdminDashboard />}
        {currentUser?.role === "Editor" && <EditorDashboard />}
        {currentUser?.role === "Viewer" && <ViewerDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
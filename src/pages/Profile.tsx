import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
// import Button from "../components/Button";
import { colors, spacing, typography, borderRadius, shadows } from "../styles/theme";

const Profile: React.FC = () => {
  const { currentUser } = useAuth();

  const getRoleColor = () => {
    switch (currentUser?.role) {
      case "Admin": return "#ff5722";
      case "Editor": return "#2196f3";
      case "Viewer": return "#4caf50";
      default: return "#9e9e9e";
    }
  };

  // const getRoleLightColor = () => {
  //   switch (currentUser?.role) {
  //     case "Admin": return colors.adminLight;
  //     case "Editor": return colors.editorLight;
  //     case "Viewer": return colors.viewerLight;
  //     default: return colors.grayLight;
  //   }
  // };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div style={{ 
          padding: spacing.xl,
          borderRadius: borderRadius.lg,
          marginBottom: spacing.xl,
        }}>
         
          <Card variant="elevated" style={{ marginBottom: spacing.xl }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              marginBottom: spacing.xl 
            }}>
              <div style={{ 
                width: "80px", 
                height: "80px", 
                borderRadius: borderRadius.circle, 
                backgroundColor: getRoleColor(), 
                color: colors.white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: typography.fontSizes.xxl,
                marginRight: spacing.lg,
                boxShadow: shadows.sm,
              }}>
                {currentUser?.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 style={{ 
                  margin: "0", 
                  fontSize: typography.fontSizes.xl,
                  color: getRoleColor(),
                }}>{currentUser?.username}</h2>
                <div style={{ 
                  display: "flex",
                  alignItems: "center",
                  gap: spacing.sm,
                  marginTop: spacing.xs,
                }}>
                  <span style={{ 
                    backgroundColor: getRoleColor(),
                    color: colors.white,
                    padding: `${spacing.xs} ${spacing.sm}`,
                    borderRadius: borderRadius.sm,
                    fontSize: typography.fontSizes.xs,
                    fontWeight: typography.fontWeights.medium,
                  }}>
                    {currentUser?.role}
                  </span>
                  <span style={{ color: colors.gray }}>Active</span>
                </div>
              </div>
            </div>
            
            
            
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: spacing.lg,
              marginBottom: spacing.xl,
            }}>
              <div>
                <div style={{ 
                  fontSize: typography.fontSizes.sm, 
                  color: colors.gray,
                  marginBottom: spacing.xs,
                }}>Username</div>
                <div style={{ fontWeight: typography.fontWeights.medium }}>{currentUser?.username}</div>
              </div>
              <div>
                <div style={{ 
                  fontSize: typography.fontSizes.sm, 
                  color: colors.gray,
                  marginBottom: spacing.xs,
                }}>Role</div>
                <div style={{ fontWeight: typography.fontWeights.medium }}>{currentUser?.role}</div>
              </div>
              <div>
                <div style={{ 
                  fontSize: typography.fontSizes.sm, 
                  color: colors.gray,
                  marginBottom: spacing.xs,
                }}>Member Since</div>
                <div style={{ fontWeight: typography.fontWeights.medium }}>March {new Date().getDate()}, 2020</div>
              </div>
            </div>
            
            <div style={{ 
              display: "flex",
              justifyContent: "flex-end", 
              gap: spacing.md,
            }}>
             
            </div>
          </Card>
          
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
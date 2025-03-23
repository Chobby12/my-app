import React, { ButtonHTMLAttributes } from "react";
import { colors, borderRadius, typography } from "../styles/theme";

type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  ...props
}) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case "primary": return colors.primary;
      case "secondary": return colors.secondary;
      case "success": return colors.success;
      case "danger": return colors.danger;
      case "warning": return colors.warning;
      case "info": return colors.info;
      case "light": return colors.light;
      case "dark": return colors.dark;
      case "link": return "transparent";
      default: return colors.primary;
    }
  };
  
  const getTextColor = () => {
    if (variant === "light") return colors.dark;
    if (variant === "link") return colors.primary;
    return colors.white;
  };
  
  const getPadding = () => {
    switch (size) {
      case "sm": return "0.25rem 0.5rem";
      case "md": return "0.5rem 1rem";
      case "lg": return "0.75rem 1.5rem";
      default: return "0.5rem 1rem";
    }
  };
  
  const getFontSize = () => {
    switch (size) {
      case "sm": return typography.fontSizes.sm;
      case "md": return typography.fontSizes.md;
      case "lg": return typography.fontSizes.lg;
      default: return typography.fontSizes.md;
    }
  };

  return (
    <button
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
        border: variant === "link" ? "none" : `1px solid ${getBackgroundColor()}`,
        borderRadius: borderRadius.md,
        padding: getPadding(),
        fontSize: getFontSize(),
        fontWeight: typography.fontWeights.medium,
        width: fullWidth ? "100%" : "auto",
        transition: "all 0.2s ease",
        ...props.style,
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
import React, { ReactNode } from "react";
import { colors, shadows, borderRadius, spacing } from "../styles/theme";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "outlined" | "elevated";
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
  style = {},
}) => {
  const getCardStyle = (): React.CSSProperties => {
    switch (variant) {
      case "outlined":
        return {
          border: `1px solid ${colors.grayLight}`,
          boxShadow: "none",
        };
      case "elevated":
        return {
          boxShadow: shadows.md,
        };
      default:
        return {
          boxShadow: shadows.sm,
        };
    }
  };

  return (
    <div
      className={`card ${className}`}
      style={{
        backgroundColor: colors.white,
        borderRadius: borderRadius.md,
        padding: spacing.xl,
        marginBottom: spacing.lg,
        ...getCardStyle(),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;

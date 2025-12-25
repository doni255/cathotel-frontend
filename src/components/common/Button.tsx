import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { colors, spacing, borderRadius, fontSize, fontWeight, transitions } from '../../styles/constants';
import { mergeStyles } from '../../styles/mixins';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  style,
  ...props
}: ButtonProps) => {
  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    border: 'none',
    borderRadius: borderRadius.md,
    cursor: 'pointer',
    fontWeight: fontWeight.semibold,
    transition: transitions.normal,
    width: fullWidth ? '100%' : 'auto',
  };

  const variantStyles: Record<string, CSSProperties> = {
    primary: {
      background: colors.primary,
      color: colors.text,
    },
    secondary: {
      background: colors.secondary,
      color: colors.text,
    },
    outline: {
      background: 'transparent',
      color: colors.text,
      border: `2px solid ${colors.primary}`,
    },
    ghost: {
      background: 'transparent',
      color: colors.text,
    },
  };

  const sizeStyles: Record<string, CSSProperties> = {
    sm: {
      padding: `${spacing.sm} ${spacing.md}`,
      fontSize: fontSize.sm,
    },
    md: {
      padding: `${spacing.md} ${spacing.lg}`,
      fontSize: fontSize.md,
    },
    lg: {
      padding: `${spacing.md} ${spacing.xl}`,
      fontSize: fontSize.lg,
    },
  };

  return (
    <button
      style={mergeStyles(baseStyle, variantStyles[variant], sizeStyles[size], style)}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

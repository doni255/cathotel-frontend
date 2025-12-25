import { useState } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { colors, spacing, borderRadius, fontSize, transitions } from '../../styles/constants';
import { mergeStyles } from '../../styles/mixins';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  required?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const Input = ({
  label,
  error,
  required,
  leftIcon,
  rightIcon,
  size = 'md',
  style,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const sizeStyles = {
    sm: { padding: `${spacing.sm} ${spacing.md}`, fontSize: fontSize.xs },
    md: { padding: `${spacing.md} ${spacing.md}`, fontSize: fontSize.sm },
    lg: { padding: `${spacing.lg} ${spacing.md}`, fontSize: fontSize.md },
  };

  const inputStyles = mergeStyles(
    {
      width: '100%',
      border: `1px solid ${error ? colors.danger : isFocused ? 'transparent' : colors.stroke}`,
      borderRadius: borderRadius.md,
      outline: 'none',
      backgroundColor: colors.secondary,
      transition: transitions.normal,
      boxShadow: isFocused ? `0 0 0 2px ${colors.accentMid}` : 'none',
      paddingLeft: leftIcon ? '44px' : spacing.md,
      paddingRight: rightIcon ? '44px' : spacing.md,
    },
    sizeStyles[size],
    style
  );

  const labelStyles = {
    display: 'block',
    fontSize: fontSize.sm,
    fontWeight: '500',
    color: colors.text,
    marginBottom: spacing.xs,
  };

  const iconBaseStyles = {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.textSub,
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label style={labelStyles}>
          {label}
          {required && <span style={{ color: colors.danger }}> *</span>}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        {leftIcon && (
          <span style={{ ...iconBaseStyles, left: spacing.md }}>
            {leftIcon}
          </span>
        )}
        <input
          style={inputStyles}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
        {rightIcon && (
          <span style={{ ...iconBaseStyles, right: spacing.md }}>
            {rightIcon}
          </span>
        )}
      </div>
      {error && (
        <span style={{ fontSize: fontSize.xs, color: colors.danger, marginTop: spacing.xs }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;

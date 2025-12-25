import { useState } from 'react';
import type { SelectHTMLAttributes } from 'react';
import { colors, spacing, borderRadius, fontSize, transitions } from '../../styles/constants';
import { mergeStyles } from '../../styles/mixins';

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = ({
  label,
  error,
  required,
  size = 'md',
  options,
  placeholder,
  style,
  ...props
}: SelectProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const sizeStyles = {
    sm: { padding: `${spacing.sm} ${spacing.md}`, fontSize: fontSize.xs },
    md: { padding: `${spacing.md} ${spacing.md}`, fontSize: fontSize.sm },
    lg: { padding: `${spacing.lg} ${spacing.md}`, fontSize: fontSize.md },
  };

  const selectStyles = mergeStyles(
    {
      width: '100%',
      border: `1px solid ${error ? colors.danger : isFocused ? 'transparent' : colors.stroke}`,
      borderRadius: borderRadius.md,
      outline: 'none',
      backgroundColor: colors.secondary,
      transition: transitions.normal,
      boxShadow: isFocused ? `0 0 0 2px ${colors.accentMid}` : 'none',
      cursor: 'pointer',
      appearance: 'none' as const,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23332A1B' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `right ${spacing.md} center`,
      paddingRight: spacing.xl,
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

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label style={labelStyles}>
          {label}
          {required && <span style={{ color: colors.danger }}> *</span>}
        </label>
      )}
      <select
        style={selectStyles}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span style={{ fontSize: fontSize.xs, color: colors.danger, marginTop: spacing.xs }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Select;

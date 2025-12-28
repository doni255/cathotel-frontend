import type { InputHTMLAttributes, ReactNode } from 'react';
import styles from '../../styles/components/Input.module.css';

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
  className,
  ...props
}: InputProps) => {
  const inputClassNames = [
    styles.input,
    styles[size],
    leftIcon && styles.hasLeftIcon,
    rightIcon && styles.hasRightIcon,
    error && styles.error,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {leftIcon && (
          <span className={`${styles.icon} ${styles.leftIcon}`}>
            {leftIcon}
          </span>
        )}
        <input className={inputClassNames} {...props} />
        {rightIcon && (
          <span className={`${styles.icon} ${styles.rightIcon}`}>
            {rightIcon}
          </span>
        )}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;

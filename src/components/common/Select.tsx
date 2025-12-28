import type { SelectHTMLAttributes } from 'react';
import styles from '../../styles/components/Select.module.css';

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
  className,
  ...props
}: SelectProps) => {
  const selectClassNames = [
    styles.select,
    styles[size],
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
      <select className={selectClassNames} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Select;

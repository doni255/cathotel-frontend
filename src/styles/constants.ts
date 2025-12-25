// ===========================================
// Design Tokens - Cat Hotel by RR
// ===========================================

// Colors (reference to CSS variables)
export const colors = {
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  bgLight: 'var(--color-bg-light)',
  bgWhite: 'var(--color-bg-white)',
  text: 'var(--color-text)',
  textSub: 'var(--color-text-sub)',
  line: 'var(--color-line)',
  stroke: 'var(--color-stroke)',
  danger: 'var(--color-danger)',
  accentMid: 'var(--color-accent-mid)',
  accentEnd: 'var(--color-accent-end)',
  black2: 'var(--color-black-2)',
  gradient: 'var(--gradient-accent)',
  // Benefit Section Colors
  bgCream: '#FBF8F2',
  textDark: '#2B2520',
  textMuted: '#6F6A64',
  accentGold: '#E8D39A',
  accentGoldDark: '#E1C27A',
  brownDark: '#2F251C',
} as const;

// Spacing
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '80px',
} as const;

// Border Radius
export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '28px',
  full: '9999px',
} as const;

// Font Sizes
export const fontSize = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '24px',
  '2xl': '28px',
  '3xl': '32px',
  '4xl': '36px',
} as const;

// Font Weights
export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

// Shadows
export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 4px 20px rgba(0, 0, 0, 0.1)',
  xl: '0 8px 30px rgba(0, 0, 0, 0.12)',
} as const;

// Transitions
export const transitions = {
  fast: '0.15s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
} as const;

// Z-Index
export const zIndex = {
  dropdown: 50,
  sticky: 100,
  modal: 200,
  tooltip: 300,
} as const;

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

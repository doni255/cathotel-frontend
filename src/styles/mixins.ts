import type { CSSProperties } from 'react';
import { colors, spacing, borderRadius, fontSize, fontWeight, transitions } from './constants';

// ===========================================
// Layout Mixins
// ===========================================

export const flexCenter: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const flexBetween: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const flexColumn: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

export const flexColumnCenter: CSSProperties = {
  ...flexColumn,
  alignItems: 'center',
  justifyContent: 'center',
};

export const absoluteFill: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

// ===========================================
// Form Mixins
// ===========================================

export const inputBase: CSSProperties = {
  width: '100%',
  padding: `${spacing.md} ${spacing.md}`,
  border: `1px solid ${colors.stroke}`,
  borderRadius: borderRadius.md,
  outline: 'none',
  fontSize: fontSize.sm,
  backgroundColor: colors.secondary,
  transition: transitions.normal,
};

export const labelBase: CSSProperties = {
  display: 'block',
  fontSize: fontSize.sm,
  fontWeight: fontWeight.medium,
  color: colors.text,
  marginBottom: spacing.xs,
};

// ===========================================
// Button Mixins
// ===========================================

export const buttonBase: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing.sm,
  border: 'none',
  borderRadius: borderRadius.md,
  cursor: 'pointer',
  fontWeight: fontWeight.semibold,
  transition: transitions.normal,
};

// ===========================================
// Card Mixins
// ===========================================

export const cardBase: CSSProperties = {
  backgroundColor: colors.bgWhite,
  borderRadius: borderRadius.lg,
  padding: spacing.lg,
};

// ===========================================
// Text Mixins
// ===========================================

export const headingLarge: CSSProperties = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: fontSize['2xl'],
  fontWeight: fontWeight.bold,
  color: colors.text,
  margin: 0,
};

export const headingMedium: CSSProperties = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: fontSize.xl,
  fontWeight: fontWeight.bold,
  color: colors.text,
  margin: 0,
};

export const textBody: CSSProperties = {
  fontSize: fontSize.sm,
  color: colors.textSub,
  margin: 0,
};

export const textLink: CSSProperties = {
  color: colors.accentMid,
  textDecoration: 'none',
  fontWeight: fontWeight.medium,
  cursor: 'pointer',
};

// ===========================================
// Page Layout Mixins
// ===========================================

export const pageContainer: CSSProperties = {
  width: '100%',
  minHeight: '100vh',
};

export const authPanelRight: CSSProperties = {
  ...flexColumnCenter,
  padding: `${spacing['2xl']} ${spacing.xl}`,
  backgroundColor: colors.bgWhite,
  position: 'relative',
  minHeight: '100vh',
};

export const authPanelLeft: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  backgroundColor: colors.bgLight,
  ...flexColumn,
  padding: spacing['2xl'],
  overflow: 'hidden',
};

// ===========================================
// Form Layout
// ===========================================

export const formContainer: CSSProperties = {
  ...flexColumn,
  gap: spacing.lg,
};

export const formRow: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: spacing.md,
};

// ===========================================
// Utility function to merge styles
// ===========================================

export const mergeStyles = (...styles: (CSSProperties | undefined)[]): CSSProperties => {
  return Object.assign({}, ...styles.filter(Boolean));
};

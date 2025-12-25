import type { CSSProperties } from 'react';
import { colors, borderRadius, fontSize, fontWeight, spacing } from '../../styles/constants';
import { flexCenter, absoluteFill } from '../../styles/mixins';
import pawIcon from '../../assets/paw.png';

interface BenefitCardProps {
  image: string;
  label: string;
  height?: string;
}

const BenefitCard = ({ image, label, height = '280px' }: BenefitCardProps) => {
  const cardStyle: CSSProperties = {
    position: 'relative',
    borderRadius: borderRadius['3xl'],
    overflow: 'hidden',
    height,
    width: '100%',
  };

  const imageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const overlayStyle: CSSProperties = {
    ...absoluteFill,
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 100%)',
  };

  const badgeStyle: CSSProperties = {
    position: 'absolute',
    bottom: spacing.lg,
    left: spacing.lg,
    backgroundColor: colors.accentGold,
    color: colors.brownDark,
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.full,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    display: 'flex',
    alignItems: 'center',
    gap: spacing.xs,
  };

  const pawWatermarkStyle: CSSProperties = {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    width: '40px',
    height: '40px',
    opacity: 0.3,
    transform: 'rotate(15deg)',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={label} style={imageStyle} />
      <div style={overlayStyle} />

      {/* Paw watermark */}
      <img src={pawIcon} alt="" style={pawWatermarkStyle} />

      {/* Label badge */}
      <div style={badgeStyle}>
        <span style={{ ...flexCenter, width: '16px', height: '16px' }}>🐾</span>
        {label}
      </div>
    </div>
  );
};

export default BenefitCard;

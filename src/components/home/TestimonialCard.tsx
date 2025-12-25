import type { CSSProperties } from 'react';
import { colors, spacing, borderRadius, fontSize, fontWeight } from '../../styles/constants';
import { flexColumn } from '../../styles/mixins';

interface TestimonialCardProps {
  name: string;
  role?: string;
  avatar: string;
  content: string;
  rating?: number;
}

const TestimonialCard = ({
  name,
  role = 'Happy Pawrent',
  avatar,
  content,
  rating = 5
}: TestimonialCardProps) => {
  const cardStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: spacing.xl,
    alignItems: 'flex-start',
    padding: `${spacing.xl} 0`,
  };

  const avatarContainerStyle: CSSProperties = {
    ...flexColumn,
    alignItems: 'center',
    gap: spacing.sm,
    minWidth: '120px',
  };

  const avatarStyle: CSSProperties = {
    width: '80px',
    height: '80px',
    borderRadius: borderRadius.full,
    objectFit: 'cover',
    border: `3px solid ${colors.accentGold}`,
  };

  const nameStyle: CSSProperties = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
    color: colors.textDark,
    margin: 0,
    textAlign: 'center',
  };

  const roleStyle: CSSProperties = {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    margin: 0,
  };

  const contentContainerStyle: CSSProperties = {
    ...flexColumn,
    gap: spacing.md,
  };

  const quoteIconStyle: CSSProperties = {
    fontFamily: 'Georgia, serif',
    fontSize: '60px',
    color: colors.accentGold,
    lineHeight: 0.5,
    marginBottom: spacing.sm,
  };

  const contentStyle: CSSProperties = {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    lineHeight: 1.8,
    margin: 0,
  };

  const starsContainerStyle: CSSProperties = {
    display: 'flex',
    gap: '4px',
    marginTop: spacing.sm,
  };

  const starStyle: CSSProperties = {
    color: colors.accentGoldDark,
    fontSize: '20px',
  };

  return (
    <div style={cardStyle}>
      {/* Avatar Section */}
      <div style={avatarContainerStyle}>
        <img src={avatar} alt={name} style={avatarStyle} />
        <h4 style={nameStyle}>{name}</h4>
        <p style={roleStyle}>{role}</p>
      </div>

      {/* Content Section */}
      <div style={contentContainerStyle}>
        <span style={quoteIconStyle}>"</span>
        <p style={contentStyle}>{content}</p>

        {/* Star Rating */}
        <div style={starsContainerStyle}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} style={starStyle}>
              {index < rating ? '★' : '☆'}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

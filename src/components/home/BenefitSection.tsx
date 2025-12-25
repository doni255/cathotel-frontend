import type { CSSProperties } from 'react';
import { colors, spacing, borderRadius, fontSize, fontWeight } from '../../styles/constants';
import { flexColumn, flexCenter } from '../../styles/mixins';
import { Button } from '../common';
import BenefitCard from './BenefitCard';

// Placeholder images - replace with actual cat hotel images
const placeholderImages = {
  cozyRoom: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop',
  playArea: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop',
  grooming: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=300&fit=crop',
  veterinary: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=350&fit=crop',
};

const BenefitSection = () => {
  const sectionStyle: CSSProperties = {
    backgroundColor: colors.bgCream,
    padding: `${spacing['4xl']} ${spacing['2xl']}`,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  const containerStyle: CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '5fr 7fr',
    gap: spacing['3xl'],
    alignItems: 'center',
  };

  const masonryGridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: spacing.md,
  };

  const rightContentStyle: CSSProperties = {
    ...flexColumn,
    gap: spacing.lg,
    paddingLeft: spacing['2xl'],
  };

  const badgeStyle: CSSProperties = {
    ...flexCenter,
    gap: spacing.xs,
    backgroundColor: colors.accentGold,
    color: colors.brownDark,
    padding: `${spacing.sm} ${spacing.lg}`,
    borderRadius: borderRadius.full,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    width: 'fit-content',
  };

  const titleStyle: CSSProperties = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '42px',
    fontWeight: fontWeight.bold,
    color: colors.textDark,
    margin: 0,
    lineHeight: 1.2,
  };

  const descriptionStyle: CSSProperties = {
    fontSize: fontSize.md,
    color: colors.textMuted,
    lineHeight: 1.7,
    margin: 0,
    maxWidth: '480px',
  };

  const ctaButtonStyle: CSSProperties = {
    marginTop: spacing.md,
    padding: `${spacing.md} ${spacing.xl}`,
    borderRadius: borderRadius['2xl'],
    fontSize: fontSize.md,
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Left Side - Masonry Photo Cards */}
        <div style={masonryGridStyle}>
          {/* First column - taller cards */}
          <div style={{ ...flexColumn, gap: spacing.md }}>
            <BenefitCard
              image={placeholderImages.cozyRoom}
              label="Cozy Rooms"
              height="260px"
            />
            <BenefitCard
              image={placeholderImages.grooming}
              label="Professional Grooming"
              height="320px"
            />
          </div>

          {/* Second column - offset cards */}
          <div style={{ ...flexColumn, gap: spacing.md, marginTop: spacing['2xl'] }}>
            <BenefitCard
              image={placeholderImages.playArea}
              label="Fun Play Area"
              height="320px"
            />
            <BenefitCard
              image={placeholderImages.veterinary}
              label="24/7 Vet Care"
              height="260px"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div style={rightContentStyle}>
          {/* Badge */}
          <div style={badgeStyle}>
            <span>🐾</span>
            Our Benefit
          </div>

          {/* Title */}
          <h2 style={titleStyle}>
            Why Cat Hotel by RR?
          </h2>

          {/* Description */}
          <p style={descriptionStyle}>
            Di Cat Hotel by RR, kami memahami bahwa kucing Anda bukan sekadar hewan peliharaan,
            tetapi anggota keluarga. Dengan fasilitas premium, staf terlatih, dan perhatian
            penuh kasih sayang, kami memastikan setiap kucing mendapatkan pengalaman menginap
            yang nyaman, aman, dan menyenangkan.
          </p>

          <p style={descriptionStyle}>
            Dari kamar-kamar yang dirancang khusus hingga area bermain yang luas,
            setiap detail diperhatikan untuk kenyamanan si meong kesayangan Anda.
          </p>

          {/* CTA Button */}
          <Button
            variant="primary"
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(253, 212, 133, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>🐾</span>
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;

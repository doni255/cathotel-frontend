import type { CSSProperties } from 'react';
import { colors, spacing, borderRadius, fontSize, fontWeight } from '../../styles/constants';
import { flexCenter, flexColumn } from '../../styles/mixins';
import murrSleep from '../../assets/Murr Sleep.png';
import murrLovely from '../../assets/Murr Lovely.png';

const BookingCTASection = () => {
  const sectionStyle: CSSProperties = {
    backgroundColor: colors.bgCream,
    padding: `${spacing['4xl']} ${spacing['2xl']}`,
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle: CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    ...flexColumn,
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  };

  const titleStyle: CSSProperties = {
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
    fontSize: '48px',
    fontWeight: 800,
    color: colors.textDark,
    lineHeight: 1.15,
    margin: 0,
    marginBottom: spacing.xl,
  };

  const highlightStyle: CSSProperties = {
    color: colors.accentGoldDark,
  };

  const buttonContainerStyle: CSSProperties = {
    position: 'relative',
    marginTop: spacing.lg,
  };

  const buttonStyle: CSSProperties = {
    ...flexCenter,
    gap: spacing.md,
    height: '60px',
    padding: `0 ${spacing.md} 0 ${spacing.xl}`,
    backgroundColor: colors.accentGold,
    border: 'none',
    borderRadius: borderRadius.full,
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const buttonTextStyle: CSSProperties = {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.brownDark,
  };

  const pawBubbleStyle: CSSProperties = {
    width: '48px',
    height: '48px',
    borderRadius: borderRadius.full,
    backgroundColor: colors.brownDark,
    ...flexCenter,
  };

  // Decorative elements styles
  const blobStyle: CSSProperties = {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: '#F5EFE3',
    opacity: 0.6,
    pointerEvents: 'none',
  };

  const decorativeSvgStyle: CSSProperties = {
    position: 'absolute',
    opacity: 0.9,
    pointerEvents: 'none',
  };

  return (
    <section style={sectionStyle}>
      {/* Blob decorations */}
      <div style={{
        ...blobStyle,
        width: '300px',
        height: '300px',
        top: '-100px',
        left: '-100px',
      }} />
      <div style={{
        ...blobStyle,
        width: '250px',
        height: '250px',
        top: '-80px',
        right: '-80px',
      }} />

      {/* Sleeping cat - left bottom */}
      <img
        src={murrSleep}
        alt="Sleeping cat"
        style={{
          ...decorativeSvgStyle,
          bottom: '20px',
          left: '60px',
          width: '180px',
          height: 'auto',
        }}
      />

      {/* Lovely cat - right top */}
      <img
        src={murrLovely}
        alt="Lovely cat"
        style={{
          ...decorativeSvgStyle,
          top: '40px',
          right: '80px',
          width: '150px',
          height: 'auto',
        }}
      />

      <div style={containerStyle}>
        {/* Title */}
        <h2 style={titleStyle}>
          Book <span style={highlightStyle}>Purr-fect</span> Room for Your Cat
          <br />
          Today!
        </h2>

        {/* CTA Button */}
        <div style={buttonContainerStyle}>
          {/* Spark doodle */}
          <svg
            style={{ position: 'absolute', top: '-20px', right: '-30px', width: '40px', height: '40px' }}
            viewBox="0 0 40 40"
            fill="none"
            stroke={colors.accentGoldDark}
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M20 5 L20 12" />
            <path d="M20 28 L20 35" />
            <path d="M5 20 L12 20" />
            <path d="M28 20 L35 20" />
            <path d="M10 10 L15 15" />
            <path d="M25 25 L30 30" />
            <path d="M30 10 L25 15" />
            <path d="M15 25 L10 30" />
          </svg>

          <button
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(232, 211, 154, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(1px)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
          >
            <span style={buttonTextStyle}>Book Now</span>
            <div style={pawBubbleStyle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-8 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 6c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3s3 1.34 3 3h2c0-2.76-2.24-5-5-5z"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingCTASection;

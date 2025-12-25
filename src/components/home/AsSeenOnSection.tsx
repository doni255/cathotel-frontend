import type { CSSProperties } from 'react';
import { colors, spacing, fontSize, fontWeight } from '../../styles/constants';
import { flexCenter } from '../../styles/mixins';

// Import logos
import uLogo from '../../assets/u.png';
import novaLogo from '../../assets/nova.png';
import tripzillaLogo from '../../assets/tripzilla.png';

const AsSeenOnSection = () => {
  const sectionStyle: CSSProperties = {
    backgroundColor: colors.bgCream,
    padding: `${spacing['4xl']} ${spacing['2xl']}`,
    textAlign: 'center',
  };

  const titleStyle: CSSProperties = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.semibold,
    color: colors.textDark,
    marginBottom: spacing['3xl'],
  };

  const logosContainerStyle: CSSProperties = {
    ...flexCenter,
    gap: spacing['4xl'],
    flexWrap: 'wrap',
  };

  const logoStyle: CSSProperties = {
    height: '60px',
    objectFit: 'contain',
    opacity: 0.9,
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  };

  return (
    <section style={sectionStyle}>
      <h3 style={titleStyle}>As Seen on</h3>

      <div style={logosContainerStyle}>
        <img
          src={uLogo}
          alt="U"
          style={logoStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <img
          src={novaLogo}
          alt="Nova"
          style={logoStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <img
          src={tripzillaLogo}
          alt="TripZilla"
          style={logoStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>
    </section>
  );
};

export default AsSeenOnSection;

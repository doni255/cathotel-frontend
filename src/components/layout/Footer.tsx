import type { CSSProperties } from 'react';
import { colors, spacing, borderRadius, fontSize, fontWeight } from '../../styles/constants';
import { flexColumn, flexCenter, flexBetween } from '../../styles/mixins';
import logo from '../../assets/logos/logo.png';

const Footer = () => {
  const footerStyle: CSSProperties = {
    backgroundColor: colors.bgCream,
    position: 'relative',
    overflow: 'hidden',
  };

  const mainContentStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '280px 1fr 1fr 380px',
    gap: spacing['2xl'],
    padding: `${spacing['4xl']} ${spacing['2xl']}`,
    maxWidth: '1400px',
    margin: '0 auto',
  };

  // Column 1 - Brand info
  const brandColumnStyle: CSSProperties = {
    ...flexColumn,
    gap: spacing.lg,
  };

  const logoContainerStyle: CSSProperties = {
    width: '140px',
    height: '140px',
    ...flexCenter,
  };

  const brandTitleStyle: CSSProperties = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.textDark,
    margin: 0,
  };

  const brandDescStyle: CSSProperties = {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    lineHeight: 1.7,
    margin: 0,
  };

  const emailStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    fontSize: fontSize.sm,
    color: colors.textDark,
    marginTop: spacing.md,
  };

  const socialIconsStyle: CSSProperties = {
    display: 'flex',
    gap: spacing.md,
    marginTop: spacing.sm,
  };

  const socialIconStyle: CSSProperties = {
    width: '36px',
    height: '36px',
    borderRadius: borderRadius.full,
    backgroundColor: colors.accentGold,
    ...flexCenter,
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  // Location styles
  const locationColumnStyle: CSSProperties = {
    ...flexColumn,
    gap: spacing.xl,
  };

  const locationTitleStyle: CSSProperties = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.textDark,
    margin: 0,
  };

  const locationAddressStyle: CSSProperties = {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    lineHeight: 1.6,
    margin: 0,
  };

  const mapContainerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '80px',
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    backgroundColor: '#e8e8e8',
  };

  const mapBadgeStyle: CSSProperties = {
    position: 'absolute',
    bottom: '-10px',
    left: spacing.md,
    backgroundColor: colors.textDark,
    color: 'white',
    padding: `${spacing.xs} ${spacing.md}`,
    borderRadius: borderRadius.full,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
  };

  const linkSectionStyle: CSSProperties = {
    ...flexColumn,
    gap: spacing.sm,
  };

  const linkTitleStyle: CSSProperties = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
    color: colors.textDark,
    margin: 0,
    marginBottom: spacing.sm,
  };

  const linkStyle: CSSProperties = {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  // Contact form column
  const contactColumnStyle: CSSProperties = {
    backgroundColor: colors.accentGold,
    borderRadius: borderRadius['2xl'],
    padding: spacing.xl,
    ...flexColumn,
    gap: spacing.md,
    position: 'relative',
  };

  const contactTitleStyle: CSSProperties = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.bold,
    color: colors.textDark,
    margin: 0,
  };

  const inputStyle: CSSProperties = {
    backgroundColor: 'white',
    border: 'none',
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: fontSize.sm,
    width: '100%',
    outline: 'none',
  };

  const textareaStyle: CSSProperties = {
    ...inputStyle,
    minHeight: '80px',
    resize: 'none',
    fontFamily: 'inherit',
  };

  const sendButtonStyle: CSSProperties = {
    backgroundColor: colors.textDark,
    color: 'white',
    padding: `${spacing.md} ${spacing.xl}`,
    borderRadius: borderRadius.full,
    border: 'none',
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    width: 'fit-content',
    transition: 'transform 0.3s ease',
  };

  const catIllustrationStyle: CSSProperties = {
    position: 'absolute',
    bottom: spacing.md,
    right: spacing.md,
    width: '80px',
    height: '100px',
    opacity: 0.9,
  };

  // Bottom bar
  const bottomBarStyle: CSSProperties = {
    ...flexBetween,
    padding: `${spacing.lg} ${spacing['2xl']}`,
    borderTop: `1px solid ${colors.line}`,
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const copyrightStyle: CSSProperties = {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    margin: 0,
  };

  const privacyLinkStyle: CSSProperties = {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <footer style={footerStyle}>
      <div style={mainContentStyle}>
        {/* Column 1 - Brand */}
        <div style={brandColumnStyle}>
          <div style={logoContainerStyle}>
            <img src={logo} alt="Cat Hotel by RR" style={{ height: '120px' }} />
          </div>
          <h4 style={brandTitleStyle}>Cat Hotel by RR</h4>
          <p style={brandDescStyle}>
            The best place for your beloved cats. We provide comfortable hotel services and a relaxing lounge for you and your fur babies.
          </p>
          <div style={emailStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={colors.textDark} strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6L12 13L2 6" />
            </svg>
            adoptcatbyrr@gmail.com
          </div>
          <div style={socialIconsStyle}>
            <div
              style={socialIconStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={colors.textDark}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div
              style={socialIconStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={colors.textDark}>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Column 2 - Locations */}
        <div style={locationColumnStyle}>
          {/* Location 1 */}
          <div style={{ ...flexColumn, gap: spacing.sm }}>
            <h4 style={locationTitleStyle}>Cabang Duren Sawit</h4>
            <p style={locationAddressStyle}>
              Blok AF No.21, Jl. Nyiur 1, Pondok Kelapa, Durensawit, Jakarta Timur 13450
            </p>
            <div style={mapContainerStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.9!3d-6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMDAuMCJTIDEwNsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                style={{ width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                title="Cabang Duren Sawit"
              />
              <div style={mapBadgeStyle}>We are here!</div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={linkSectionStyle}>
            <h5 style={linkTitleStyle}>Quick Links</h5>
            {['Home', 'About Us', 'Services', 'FAQs'].map((link) => (
              <a
                key={link}
                href="#"
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.textDark}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.textMuted}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 - Location 2 & Booking */}
        <div style={locationColumnStyle}>
          {/* Location 2 */}
          <div style={{ ...flexColumn, gap: spacing.sm }}>
            <h4 style={locationTitleStyle}>Cabang Caringin</h4>
            <p style={locationAddressStyle}>
              Jl. Caringin Utara No. 18B, Cilandak Barat, Cilandak, Jakarta Selatan.
            </p>
            <div style={mapContainerStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnNDguMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                style={{ width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                title="Cabang Caringin"
              />
              <div style={mapBadgeStyle}>The Cat Lounge by RR here!</div>
            </div>
          </div>

          {/* Booking Links */}
          <div style={linkSectionStyle}>
            <h5 style={linkTitleStyle}>Booking</h5>
            {['Cat Hotel', 'Grooming'].map((link) => (
              <a
                key={link}
                href="#"
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.textDark}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.textMuted}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Column 4 - Contact Form */}
        <div style={contactColumnStyle}>
          <h3 style={contactTitleStyle}>Get In Touch</h3>
          <input
            type="text"
            placeholder="Full Name"
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
          />
          <textarea
            placeholder="Message"
            style={textareaStyle}
          />
          <button
            style={sendButtonStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Send
            <span style={{ fontSize: '16px' }}>🐾</span>
          </button>

          {/* Cat illustration placeholder */}
          <svg
            style={catIllustrationStyle}
            viewBox="0 0 80 100"
            fill="none"
          >
            <ellipse cx="40" cy="85" rx="25" ry="10" fill="#F5E6C8" />
            <path d="M25 75C25 55 30 40 40 40C50 40 55 55 55 75" stroke={colors.textDark} strokeWidth="2" fill="white" />
            <circle cx="32" cy="55" r="3" fill={colors.textDark} />
            <circle cx="48" cy="55" r="3" fill={colors.textDark} />
            <path d="M38 62C38 62 40 65 42 62" stroke={colors.textDark} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M25 45L20 30" stroke={colors.textDark} strokeWidth="2" strokeLinecap="round" />
            <path d="M55 45L60 30" stroke={colors.textDark} strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="40" cy="70" rx="8" ry="5" fill={colors.accentGoldDark} opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={bottomBarStyle}>
        <p style={copyrightStyle}>© 2025 Cat Hotel by RR</p>
        <a
          href="#"
          style={privacyLinkStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = colors.textDark}
          onMouseLeave={(e) => e.currentTarget.style.color = colors.textMuted}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;

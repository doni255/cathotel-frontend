import { useState } from 'react';
import logo from '../../assets/logos/logo.png';
import { Button } from '../common';
import { AppContext } from '../../App';
import { colors, spacing, fontSize, fontWeight, borderRadius, shadows, zIndex, transitions } from '../../styles/constants';
import { flexCenter, flexBetween } from '../../styles/mixins';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  {
    label: 'Booking',
    href: '/booking',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Cat Hotel', href: '/booking/hotel' },
      { label: 'Grooming', href: '/booking/grooming' },
    ],
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount] = useState(2);

  const navLinkStyle = {
    ...flexCenter,
    gap: spacing.xs,
    color: colors.text,
    textDecoration: 'none',
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    transition: transitions.normal,
  };

  const dropdownStyle = {
    position: 'absolute' as const,
    top: '100%',
    left: '0',
    marginTop: spacing.sm,
    backgroundColor: colors.bgWhite,
    borderRadius: borderRadius.md,
    boxShadow: shadows.lg,
    minWidth: '160px',
    overflow: 'hidden',
  };

  const dropdownItemStyle = {
    display: 'block',
    padding: `${spacing.md} ${spacing.md}`,
    color: colors.text,
    textDecoration: 'none',
    fontSize: fontSize.sm,
    transition: transitions.normal,
  };

  const cartBadgeStyle = {
    position: 'absolute' as const,
    top: '-8px',
    right: '-8px',
    backgroundColor: colors.danger,
    color: 'white',
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    width: '20px',
    height: '20px',
    borderRadius: borderRadius.full,
    ...flexCenter,
  };

  return (
    <nav style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: zIndex.sticky,
      ...flexBetween,
      padding: `${spacing.md} ${spacing['2xl']}`,
      backgroundColor: colors.bgWhite,
    }}>
      {/* Logo */}
      <div style={flexCenter}>
        <img src={logo} alt="Cat Hotel Logo" style={{ height: '56px' }} />
      </div>

      {/* Nav Links */}
      <div style={{ ...flexCenter, gap: '40px' }}>
        {navItems.map((item) => (
          <div
            key={item.label}
            style={{ position: 'relative' }}
            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href={item.href}
              style={navLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.accentMid)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.text)}
            >
              {item.label}
              {item.hasDropdown && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{
                    transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)',
                    transition: transitions.normal,
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </a>

            {/* Dropdown */}
            {item.hasDropdown && activeDropdown === item.label && (
              <div style={dropdownStyle}>
                {item.dropdownItems?.map((dropdownItem) => (
                  <a
                    key={dropdownItem.label}
                    href={dropdownItem.href}
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.secondary)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {dropdownItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Side - Cart & Login */}
      <div style={{ ...flexCenter, gap: spacing.lg }}>
        {/* Cart Icon */}
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.text}
            strokeWidth="2"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {cartCount > 0 && <span style={cartBadgeStyle}>{cartCount}</span>}
        </div>

        {/* Login Button */}
        <Button
          variant="primary"
          onClick={() => AppContext.setCurrentPage('login')}
          style={{
            width: '136px',
            height: '48px',
            padding: '12px 18px',
            borderRadius: borderRadius.md,
          }}
        >
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

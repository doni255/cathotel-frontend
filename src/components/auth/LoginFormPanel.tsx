import logo from '../../assets/logos/logo.png';
import { AppContext } from '../../App';
import { Button, Input } from '../common';
import { colors, spacing, fontSize, fontWeight } from '../../styles/constants';
import { flexCenter, flexBetween, authPanelRight, headingLarge, textBody, textLink, formContainer } from '../../styles/mixins';

const LoginFormPanel = () => {
  return (
    <div style={authPanelRight}>
      {/* Logo */}
      <div style={{ ...flexCenter, marginBottom: spacing.xl }}>
        <img src={logo} alt="Cat Hotel Logo" style={{ height: '64px' }} />
      </div>

      {/* Welcome Text */}
      <div style={{ marginBottom: spacing.xl, textAlign: 'center' }}>
        <h2 style={{ ...headingLarge, fontSize: '33px', textAlign: 'center' }}>
          Welcome back, Pawrents!
        </h2>
        <p style={{ ...textBody, marginTop: spacing.sm, color: colors.black2 }}>
          Enter your email and password to login
        </p>
      </div>

      {/* Login Form */}
      <form style={{ ...formContainer, width: '100%', maxWidth: '400px' }}>
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
        />

        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
        />

        {/* Remember & Forgot */}
        <div style={flexBetween}>
          <label style={{ ...flexCenter, gap: spacing.sm, cursor: 'pointer' }}>
            <input
              type="checkbox"
              style={{
                width: '16px',
                height: '16px',
                cursor: 'pointer',
                accentColor: colors.accentMid,
              }}
            />
            <span style={{ fontSize: fontSize.sm, color: colors.textSub }}>
              Remember me
            </span>
          </label>
          <a
            href="#"
            style={textLink}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <Button type="submit" fullWidth>
          Sign In
        </Button>
      </form>

      {/* Sign Up Link */}
      <p style={{ ...textBody, marginTop: spacing.xl, textAlign: 'center' }}>
        Don't have an account?{' '}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            AppContext.setCurrentPage('register');
          }}
          style={{ ...textLink, fontWeight: fontWeight.medium }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginFormPanel;

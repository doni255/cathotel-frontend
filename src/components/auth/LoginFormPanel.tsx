import { useState } from 'react';
import logo from '../../assets/logos/logo.png';
import { AppContext } from '../../App';
import { Button, Input, Icon } from '../common';
import { colors, spacing, fontWeight } from '../../styles/constants';
import { flexCenter, authPanelRight, headingLarge, textBody, textLink, formContainer } from '../../styles/mixins';

const LoginFormPanel = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
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
      <form style={{ ...formContainer, width: '100%', maxWidth: '554px' }}>
        <Input
          type="email"
          label="Email"
          placeholder="Email"
          leftIcon={<Icon icon="email" size={16} />}
        />

        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          label="Password"
          placeholder="Password"
          leftIcon={<Icon icon="lock" size={16} />}
          rightIcon={
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon icon="eye" size={16} />
            </button>
          }
        />

        {/* Submit Button */}
        <Button type="submit" fullWidth>
          Login
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
          Create an Account
        </a>
      </p>
    </div>
  );
};

export default LoginFormPanel;

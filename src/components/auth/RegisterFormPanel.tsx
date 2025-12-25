import { useState } from 'react';
import logo from '../../assets/logos/logo.png';
import { AppContext } from '../../App';

const RegisterFormPanel = () => {
  const [showPassword, setShowPassword] = useState(false);

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid var(--color-stroke)',
    borderRadius: '8px',
    outline: 'none',
    fontSize: '14px',
    backgroundColor: 'var(--color-secondary)',
    transition: 'all 0.3s'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--color-text)',
    marginBottom: '6px'
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-accent-mid)';
    e.currentTarget.style.borderColor = 'transparent';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'var(--color-stroke)';
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 32px',
      backgroundColor: 'var(--color-bg-white)',
      position: 'relative',
      minHeight: '100vh'
    }}>
      {/* Logo */}
      <div style={{
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img src={logo} alt="Cat Hotel Logo" style={{ height: '80px' }} />
      </div>

      {/* Welcome Text */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{
          fontFamily: 'Raleway',
          fontSize: '28px',
          lineHeight: '120%',
          fontWeight: '700',
          textAlign: 'center',
          margin: '0',
          color: 'var(--color-text)'
        }}>
          Create an Account
        </h2>
        <p style={{
          color: 'var(--color-black-2)',
          marginTop: '8px',
          textAlign: 'center',
          margin: '8px 0 0 0',
          fontSize: '14px'
        }}>
          Join us & give your cat a stress-free, five-star experience!
        </p>
      </div>

      {/* Register Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          AppContext.setCurrentPage('cat-details');
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        {/* First Name & Last Name Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* First Name */}
          <div>
            <label htmlFor="firstName" style={labelStyle}>
              First Name <span style={{ color: 'var(--color-danger)' }}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" style={labelStyle}>
              Last Name <span style={{ color: 'var(--color-danger)' }}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" style={labelStyle}>
            Phone Number <span style={{ color: 'var(--color-danger)' }}>*</span>
          </label>
          <div style={{ position: 'relative', display: 'flex', gap: '8px' }}>
            <select
              style={{
                ...inputStyle,
                width: 'auto',
                paddingRight: '32px',
                cursor: 'pointer',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23332A1B' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center'
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option value="+62">+62</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+81">+81</option>
            </select>
            <input
              type="tel"
              id="phone"
              placeholder="Phone number"
              style={{ ...inputStyle, flex: 1 }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email <span style={{ color: 'var(--color-danger)' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-sub)'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </span>
            <input
              type="email"
              id="email"
              placeholder="Email"
              style={{ ...inputStyle, paddingLeft: '44px' }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" style={labelStyle}>
            Password <span style={{ color: 'var(--color-danger)' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-sub)'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              style={{ ...inputStyle, paddingLeft: '44px', paddingRight: '44px' }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text-sub)',
                padding: 0
              }}
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            background: 'var(--color-primary)',
            color: 'var(--color-text)',
            fontWeight: '600',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
            fontSize: '16px',
            marginTop: '12px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Continue
        </button>
      </form>

      {/* Login Link */}
      <p style={{
        textAlign: 'center',
        marginTop: '24px',
        color: 'var(--color-text-sub)',
        fontSize: '14px',
        margin: '24px 0 0 0'
      }}>
        Already have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            AppContext.setCurrentPage('login');
          }}
          style={{
            color: 'var(--color-text)',
            fontWeight: '600',
            textDecoration: 'underline'
          }}
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterFormPanel;

import logo from '../assets/logos/logo.png';

const LoginFormPanel = () => {
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
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img src={logo} alt="Cat Hotel Logo" style={{ height: '64px' }} />
      </div>

      {/* Welcome Text */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{
          fontFamily: 'Raleway',
          fontSize: '33px',
          lineHeight: '120%',
          fontWeight: '700',
          textAlign: 'center',
          margin: '0',
          color: 'var(--color-text)'
        }}>
          Welcome back, Pawrents!
        </h2>
        <p style={{
          color: 'var(--color-black-2)',
          marginTop: '8px',
          textAlign: 'center',
          margin: '8px 0 0 0',
          fontSize: '14px'
        }}>
          Enter your email and password to login
        </p>
      </div>

      {/* Login Form */}
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Email Input */}
        <div>
          <label htmlFor="email" style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--color-text)',
            marginBottom: '6px'
          }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: `1px solid var(--color-stroke)`,
              borderRadius: '8px',
              outline: 'none',
              fontSize: '14px',
              transition: 'all 0.3s'
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = 'none';
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-accent-mid)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = `var(--color-stroke)`;
            }}
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--color-text)',
            marginBottom: '6px'
          }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: `1px solid var(--color-stroke)`,
              borderRadius: '8px',
              outline: 'none',
              fontSize: '14px',
              transition: 'all 0.3s'
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = 'none';
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-accent-mid)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = `var(--color-stroke)`;
            }}
          />
        </div>

        {/* Remember & Forgot */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '4px',
                border: `1px solid var(--color-stroke)`,
                cursor: 'pointer',
                accentColor: 'var(--color-accent-mid)'
              }}
            />
            <span style={{
              fontSize: '14px',
              color: 'var(--color-text-sub)'
            }}>Remember me</span>
          </label>
          <a href="#" style={{
            fontSize: '14px',
            color: 'var(--color-accent-mid)',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            background: 'var(--gradient-accent)',
            color: 'white',
            fontWeight: '500',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
            fontSize: '14px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Sign In
        </button>
      </form>

      {/* Sign Up Link */}
      <p style={{
        textAlign: 'center',
        marginTop: '32px',
        color: 'var(--color-text-sub)',
        fontSize: '14px',
        margin: '32px 0 0 0'
      }}>
        Don't have an account?{" "}
        <a href="#" style={{
          color: 'var(--color-accent-mid)',
          fontWeight: '500',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
        >
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginFormPanel;

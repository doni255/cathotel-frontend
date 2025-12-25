import logo from '../assets/logos/logo.png';
import { AppContext } from '../App';

const DoneFormPanel = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 32px',
      backgroundColor: 'var(--color-bg-white)',
      position: 'relative',
      minHeight: '100vh'
    }}>
      {/* Logo */}
      <div style={{ marginBottom: '48px' }}>
        <img src={logo} alt="Cat Hotel Logo" style={{ height: '80px' }} />
      </div>

      {/* Cat Image Frame */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        aspectRatio: '4/3',
        borderRadius: '24px',
        padding: '8px',
        backgroundColor: 'var(--color-bg-white)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '18px',
          overflow: 'hidden',
          border: '3px solid var(--color-line)'
        }}>
          <img
            src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800"
            alt="Cats"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Success Message */}
      <h1 style={{
        fontFamily: 'Raleway, sans-serif',
        fontSize: '32px',
        fontWeight: '700',
        color: 'var(--color-text)',
        margin: '0 0 16px 0',
        textAlign: 'center'
      }}>
        You're All Set! 🎉
      </h1>

      <p style={{
        fontSize: '16px',
        color: 'var(--color-text-sub)',
        margin: '0 0 4px 0',
        textAlign: 'center'
      }}>
        We're excited to welcome your cat.
      </p>
      <p style={{
        fontSize: '16px',
        color: 'var(--color-text-sub)',
        margin: '0 0 40px 0',
        textAlign: 'center'
      }}>
        You can now book a stay or grooming session with us.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => AppContext.setCurrentPage('login')}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '16px 32px',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-text)',
          fontSize: '16px',
          fontWeight: '600',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'opacity 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        Let's Get Started!
      </button>
    </div>
  );
};

export default DoneFormPanel;

const HeroSection = () => {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }} />
      </div>

      {/* Hero Content */}
      <div style={{
        textAlign: 'center',
        color: 'white',
        zIndex: 1,
        padding: '0 24px',
      }}>
        <h1 style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: '700',
          lineHeight: '1.2',
          margin: 0,
        }}>
          A{' '}
          <span style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-text)',
            padding: '4px 16px',
            borderRadius: '8px',
          }}>
            Purr-fect
          </span>{' '}
          Stay
          <br />
          for{' '}
          <span style={{
            display: 'inline-block',
            verticalAlign: 'middle',
          }}>
            🏠
          </span>{' '}
          Your
          <br />
          Lovely Cat
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

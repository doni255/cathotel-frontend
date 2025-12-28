import pawImage from "../../assets/paw.png";
import pawImage2 from "../../assets/paw2.png";
import cat1 from "../../assets/cats/cat.png";
import cat2 from "../../assets/cats/cat2.png";
import cat3 from "../../assets/cats/cat3.png";
import cat4 from "../../assets/cats/cat4.png";

const LeftImagePanel = () => {
  // Cat images for the 4 cards
  const images = [cat1, cat2, cat3, cat4];

  // Card radius configurations based on position
  const cardRadiusStyles = [
    { borderTopLeftRadius: '80px', borderTopRightRadius: '18px', borderBottomLeftRadius: '18px', borderBottomRightRadius: '18px' }, // top-left
    { borderTopLeftRadius: '18px', borderTopRightRadius: '80px', borderBottomLeftRadius: '18px', borderBottomRightRadius: '18px' }, // top-right
    { borderTopLeftRadius: '18px', borderTopRightRadius: '18px', borderBottomLeftRadius: '80px', borderBottomRightRadius: '18px' }, // bottom-left
    { borderTopLeftRadius: '18px', borderTopRightRadius: '18px', borderBottomLeftRadius: '18px', borderBottomRightRadius: '80px' }, // bottom-right
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: 'var(--color-bg-light)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '24px 0'
    }}>
      {/* Decorative Paw - Top Left */}
      <img
        src={pawImage}
        alt="Paw"
        style={{
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />

      {/* Decorative Paw - Bottom Right */}
      <img
        src={pawImage2}
        alt="Paw"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0
        }}
      />
    
   
      {/* Main Frame Container */}
      <div style={{
        position: 'relative',
        width: 'min(623px, 90%)',
        height: 'calc(100vh - 120px)',
        maxHeight: '738px',
        borderTopLeftRadius: '90px',
        borderBottomRightRadius: '90px',
        overflow: 'hidden'
      }}>
        {/* Gradient Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(112.79deg, #FDD485 43.64%, #795B47 96.41%, #4C3333 128.78%)'
        }} />

        {/* Border Layer 1: Top + Left */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderTopLeftRadius: '90px',
          borderBottomRightRadius: '90px',
          pointerEvents: 'none'
        }} />

        {/* Border Layer 2: Bottom + Right */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderTopLeftRadius: '90px',
          borderBottomRightRadius: '90px',
          pointerEvents: 'none'
        }} />

        {/* Grid Container for 4 Image Cards */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          padding: '16px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '16px',
          height: '100%'
        }}>
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                ...cardRadiusStyles[index]
              }}
            >
              <img
                src={src}
                alt={`Cat ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p style={{
        width: 'min(623px, 90%)',
        fontSize: '14px',
        color: '#332A1B',
        margin: 0,
        marginTop: '16px',
        textAlign: 'left'
      }}>
        © 2025 Cat Hotel by RR
      </p>
    </div>
  );
};

export default LeftImagePanel;

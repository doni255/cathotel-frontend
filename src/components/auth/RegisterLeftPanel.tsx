import pawImage from "../../assets/paw.png";
import pawImage2 from "../../assets/paw2.png";
import logo from "../../assets/logos/logo.png";

interface RegisterLeftPanelProps {
  activeStep?: number;
}

const RegisterLeftPanel = ({ activeStep = 1 }: RegisterLeftPanelProps) => {
  const steps = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="7" y1="8" x2="17" y2="8" />
          <line x1="7" y1="12" x2="13" y2="12" />
        </svg>
      ),
      title: "Your details",
      description: "Enter your email, password, name, and phone number to get started."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8 6 4 10 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-4-4-8-8-12z" />
          <circle cx="12" cy="14" r="2" />
        </svg>
      ),
      title: "Your cat's details",
      description: "Tell us about your cat"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Done",
      description: "Your account is ready! Now you can book a cozy stay or grooming session for your cat"
    }
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: 'var(--color-bg-light)',
      display: 'flex',
      flexDirection: 'column',
      padding: '48px',
      overflow: 'hidden'
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

      {/* Logo & Title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '80px',
        zIndex: 1
      }}>
        <img src={logo} alt="Cat Hotel Logo" style={{ height: '48px' }} />
        <h1 style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: '28px',
          fontWeight: '700',
          color: 'var(--color-text)',
          margin: 0
        }}>
          Cat Hotel by RR
        </h1>
      </div>

      {/* Stepper */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        zIndex: 1,
        flex: 1
      }}>
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === activeStep;
          const isCompleted = stepNumber < activeStep;

          return (
            <div key={index} style={{ display: 'flex', gap: '16px' }}>
              {/* Icon & Line Column */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                {/* Icon Box */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  border: `2px solid ${isActive || isCompleted ? 'var(--color-stroke)' : 'var(--color-line)'}`,
                  backgroundColor: 'var(--color-bg-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive || isCompleted ? 'var(--color-text)' : 'var(--color-text-sub)',
                  position: 'relative'
                }}>
                  {/* Decorative corners */}
                  <div style={{
                    position: 'absolute',
                    top: '-4px',
                    left: '-4px',
                    width: '8px',
                    height: '8px',
                    borderTop: '2px solid var(--color-text-sub)',
                    borderLeft: '2px solid var(--color-text-sub)',
                    opacity: isActive || isCompleted ? 1 : 0.3
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    right: '-4px',
                    width: '8px',
                    height: '8px',
                    borderBottom: '2px solid var(--color-text-sub)',
                    borderRight: '2px solid var(--color-text-sub)',
                    opacity: isActive || isCompleted ? 1 : 0.3
                  }} />
                  {step.icon}
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div style={{
                    width: '2px',
                    height: '40px',
                    backgroundColor: isCompleted ? 'var(--color-stroke)' : 'var(--color-line)'
                  }} />
                )}
              </div>

              {/* Text Column */}
              <div style={{ paddingTop: '8px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: isActive || isCompleted ? 'var(--color-text)' : 'var(--color-text-sub)',
                  margin: '0 0 4px 0'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--color-text-sub)',
                  margin: 0,
                  maxWidth: '400px',
                  lineHeight: '1.5'
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Copyright */}
      <p style={{
        fontSize: '14px',
        color: '#332A1B',
        margin: 0,
        zIndex: 1
      }}>
        © 2025 Cat Hotel by RR
      </p>
    </div>
  );
};

export default RegisterLeftPanel;

import pawImage from "../../assets/paw.png";
import catHotelLogo from "../../assets/logos/NEW CAT HOTEL BYY RR LOGO FEEDS (1) 1 (1).svg";
import catsImage from "../../assets/cats/3cat.png";
import detailsIcon from "../../assets/step-sign-in/framer-details.svg";
import catIcon from "../../assets/step-sign-in/framer-cat.svg";
import rocketIcon from "../../assets/step-sign-in/framer-rocket.svg";

interface RegisterLeftPanelProps {
  activeStep?: number;
}

const RegisterLeftPanel = ({ activeStep = 1 }: RegisterLeftPanelProps) => {
  const steps = [
    {
      icon: <img src={detailsIcon} alt="Your details" style={{ width: '53px', height: '53px' }} />,
      title: "Your details",
      description: "Enter your email, password, name, and phone number to get started."
    },
    {
      icon: <img src={catIcon} alt="Your cat's details" style={{ width: '53px', height: '53px' }} />,
      title: "Your cat's details",
      description: "Tell us about your cat"
    },
    {
      icon: <img src={rocketIcon} alt="Done" style={{ width: '53px', height: '53px' }} />,
      title: "Done",
      description: "Your account is ready! Now you can book a cozy stay or grooming session for your cat"
    }
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'var(--color-bg-light)',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      overflowX: 'hidden',
      paddingLeft: '48px',
      paddingRight: '48px',
      paddingTop: '32px'
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

      {/* Cats Image - Bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <p style={{
          fontSize: '12px',
          color: 'var(--color-text-sub)',
          marginBottom: '8px',
          marginLeft: '48px',
          margin: '0 0 8px 48px'
        }}>
          © 2025 Cat Hotel by RR
        </p>
        <img
          src={catsImage}
          alt="Cats"
          style={{
            height: 'auto',
            width: '100%'
          }}
        />
      </div>

      {/* Cat Hotel Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginTop: '150px',
        marginBottom: '60px',
        zIndex: 2
      }}>
        <div style={{
          width: '52px',
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <img src={catHotelLogo} alt="Cat Hotel Logo" style={{ height: '40px', width: '40px' }} />
        </div>
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

        zIndex: 2,
        marginBottom: '100px'
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
                {/* Icon */}
                {step.icon}

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div style={{
                    width: '2px',
                    height: '40px',
                    backgroundColor: isCompleted ? 'var(--color-stroke)' : 'var(--color-line)',
                  }} />
                )}
              </div>

              {/* Text Column */}
              <div>
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

    </div>
  );
};

export default RegisterLeftPanel;

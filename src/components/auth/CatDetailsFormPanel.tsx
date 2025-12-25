import { useState } from 'react';
import logo from '../../assets/logos/logo.png';
import { AppContext } from '../../App';

const CatDetailsFormPanel = () => {
  const [gender, setGender] = useState<'female' | 'male' | null>(null);
  const [catPhoto, setCatPhoto] = useState<string | null>(null);

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

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCatPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    AppContext.setCurrentPage('done');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 32px',
      backgroundColor: 'var(--color-bg-white)',
      position: 'relative',
      minHeight: '100vh',
      overflowY: 'auto'
    }}>
      {/* Logo */}
      <div style={{
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img src={logo} alt="Cat Hotel Logo" style={{ height: '80px' }} />
      </div>

      {/* Title */}
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
          Tell us about your cat
        </h2>
        <p style={{
          color: 'var(--color-black-2)',
          marginTop: '8px',
          textAlign: 'center',
          margin: '8px 0 0 0',
          fontSize: '14px'
        }}>
          Help us give your furry friend the best care by filling in their details.
        </p>
      </div>

      {/* Cat Details Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Cat Photo Upload */}
        <div>
          <label style={labelStyle}>Your Cat's Photo</label>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer',
                zIndex: 2
              }}
            />
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-secondary)',
              border: '2px solid var(--color-stroke)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              {catPhoto ? (
                <img src={catPhoto} alt="Cat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-sub)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              )}
            </div>
            {/* Camera icon */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-text-sub)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Cat's Name */}
        <div>
          <label htmlFor="catName" style={labelStyle}>
            Cat's Name <span style={{ color: 'var(--color-danger)' }}>*</span>
          </label>
          <input
            type="text"
            id="catName"
            placeholder="Cat's Name"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob" style={labelStyle}>Date of Birth</label>
          <div style={{ position: 'relative' }}>
            <input
              type="date"
              id="dob"
              placeholder="Select Date"
              style={{ ...inputStyle, paddingRight: '44px' }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* Breed & Gender Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Breed */}
          <div>
            <label htmlFor="breed" style={labelStyle}>Breed</label>
            <input
              type="text"
              id="breed"
              placeholder="Type of Breed"
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {/* Gender */}
          <div>
            <label style={labelStyle}>Gender</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setGender('female')}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: `2px solid ${gender === 'female' ? 'var(--color-primary)' : 'transparent'}`,
                  borderRadius: '8px',
                  backgroundColor: gender === 'female' ? 'var(--color-secondary)' : 'transparent',
                  color: 'var(--color-primary)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  transition: 'all 0.2s'
                }}
              >
                <span>♀</span> Female
              </button>
              <button
                type="button"
                onClick={() => setGender('male')}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: `2px solid ${gender === 'male' ? 'var(--color-primary)' : 'transparent'}`,
                  borderRadius: '8px',
                  backgroundColor: gender === 'male' ? 'var(--color-secondary)' : 'transparent',
                  color: 'var(--color-primary)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  transition: 'all 0.2s'
                }}
              >
                <span>♂</span> Male
              </button>
            </div>
          </div>
        </div>

        {/* Vaccination Status */}
        <div>
          <label htmlFor="vaccination" style={labelStyle}>Vaccination Status</label>
          <select
            id="vaccination"
            style={{
              ...inputStyle,
              cursor: 'pointer',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23332A1B' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center'
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="">Select Status</option>
            <option value="fully">Fully Vaccinated</option>
            <option value="partial">Partially Vaccinated</option>
            <option value="not">Not Vaccinated</option>
          </select>
        </div>

        {/* Upload Vaccination Book */}
        <div>
          <label style={labelStyle}>Upload Vaccination Book</label>
          <div style={{ position: 'relative', width: '100px', height: '100px' }}>
            <input
              type="file"
              accept="image/*,.pdf"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer',
                zIndex: 2
              }}
            />
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '12px',
              border: '2px dashed var(--color-stroke)',
              backgroundColor: 'var(--color-bg-white)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: '500' }}>Upload</span>
            </div>
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
    </div>
  );
};

export default CatDetailsFormPanel;

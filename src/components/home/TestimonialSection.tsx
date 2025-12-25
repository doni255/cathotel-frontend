import type { CSSProperties } from 'react';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../../styles/constants';
import { flexColumn, flexCenter } from '../../styles/mixins';
import TestimonialCard from './TestimonialCard';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Nova Laili Mustofa',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: 'Rekomen bgt sih nitip anabul di sini. Terorganisir jadwal mainnya, jadinya ga semua kucingnya nyampur jadi satu. Pengasuh kucingnya juga telaten bgt bersihin dan urusin kucing2. Pet hotelnya mau dengerin saran2 dari owner dgn sabar hehe. Cuma menurut aku kurangnya 1, jauh bgt kalo dari aku yg tinggal di jakbar 😆 cuma ini worth it bgt, harga bersahabat, gratis grooming pulaaa. Tapi bisa anter jemput kok kalo pegawainya ga sibuk. Kucingku sih enjoy aja kalo nginep di tempat yg bersih + bagus',
    rating: 5,
  },
  {
    id: 2,
    name: 'Teresa Tridiva',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'My cats stayed here for 7 days while I was back in my hometown, and I\'ve got to say, the service was amazing. The staff and admins were super friendly and quick to respond in the chats. Every owner gets access to 24 hours CCTV, and I received two video updates a day (morning and afternoon during their playtime). My girls came home healthy and squeaky clean (they even throw in free grooming), they even seemed entirely at ease with the pet hotel and the staffs by the end of their stay, which was truly heartwarming.\n\nThis place is undeniably worth every penny, and I\'d trust them with my cats anytime. Thank you so much, RR Pet Hotel team, for your dedication to looking after the cats! I\'m looking forward to using your service again, keep up the great work!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Andini',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'I left my cat here for a couple of months while I returned to America. The staff was incredibly caring and sent me regular updates with photos and videos. My cat was well-fed, groomed, and happy. Highly recommend Cat Hotel by RR for long-term stays!',
    rating: 5,
  },
];

const TestimonialSection = () => {
  const sectionStyle: CSSProperties = {
    backgroundColor: colors.bgCream,
    padding: `${spacing['4xl']} ${spacing['2xl']}`,
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle: CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '350px 1fr',
    gap: spacing['3xl'],
    alignItems: 'flex-start',
  };

  // Left side styles
  const leftContentStyle: CSSProperties = {
    ...flexColumn,
    gap: spacing.lg,
    position: 'sticky',
    top: spacing['2xl'],
  };

  const badgeStyle: CSSProperties = {
    ...flexCenter,
    backgroundColor: colors.accentGold,
    color: colors.brownDark,
    padding: `${spacing.sm} ${spacing.lg}`,
    borderRadius: borderRadius.full,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    width: 'fit-content',
  };

  const titleStyle: CSSProperties = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '42px',
    fontWeight: fontWeight.bold,
    color: colors.textDark,
    margin: 0,
    lineHeight: 1.2,
  };

  const subtitleStyle: CSSProperties = {
    fontSize: fontSize.md,
    color: colors.textMuted,
    lineHeight: 1.6,
    margin: 0,
    maxWidth: '300px',
  };

  // Google Rating Card
  const ratingCardStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.bgWhite,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    boxShadow: shadows.md,
    marginTop: spacing.lg,
    width: 'fit-content',
  };

  const ratingScoreStyle: CSSProperties = {
    background: `linear-gradient(135deg, ${colors.accentGold} 0%, ${colors.accentGoldDark} 100%)`,
    padding: `${spacing.lg} ${spacing.xl}`,
    ...flexCenter,
  };

  const scoreNumberStyle: CSSProperties = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '36px',
    fontWeight: fontWeight.bold,
    color: 'white',
  };

  const ratingInfoStyle: CSSProperties = {
    padding: `${spacing.md} ${spacing.lg}`,
    ...flexColumn,
    gap: '4px',
  };

  const ratingLabelStyle: CSSProperties = {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    margin: 0,
  };

  const ratingStarsStyle: CSSProperties = {
    display: 'flex',
    gap: '2px',
    color: colors.accentGoldDark,
    fontSize: fontSize.md,
  };

  // Right side - Testimonials list
  const testimonialsContainerStyle: CSSProperties = {
    ...flexColumn,
    gap: spacing.lg,
    maxHeight: '80vh',
    overflowY: 'auto',
    paddingRight: spacing.md,
  };

  // Decorative hearts style
  const decorativeHeartStyle: CSSProperties = {
    position: 'absolute',
    opacity: 0.15,
    pointerEvents: 'none',
  };

  return (
    <section style={sectionStyle}>
      {/* Decorative Hearts */}
      <svg
        style={{ ...decorativeHeartStyle, top: '60px', left: '20px', width: '200px', height: '200px' }}
        viewBox="0 0 100 100"
        fill="none"
        stroke={colors.accentGoldDark}
        strokeWidth="1"
      >
        <path d="M50 88C50 88 10 58 10 35C10 20 22 10 35 10C42 10 48 14 50 20C52 14 58 10 65 10C78 10 90 20 90 35C90 58 50 88 50 88Z" />
      </svg>
      <svg
        style={{ ...decorativeHeartStyle, top: '180px', left: '150px', width: '120px', height: '120px' }}
        viewBox="0 0 100 100"
        fill="none"
        stroke={colors.accentGoldDark}
        strokeWidth="1"
      >
        <path d="M50 88C50 88 10 58 10 35C10 20 22 10 35 10C42 10 48 14 50 20C52 14 58 10 65 10C78 10 90 20 90 35C90 58 50 88 50 88Z" />
      </svg>
      <svg
        style={{ ...decorativeHeartStyle, top: '100px', left: '280px', width: '80px', height: '80px' }}
        viewBox="0 0 100 100"
        fill="none"
        stroke={colors.accentGoldDark}
        strokeWidth="1"
      >
        <path d="M50 88C50 88 10 58 10 35C10 20 22 10 35 10C42 10 48 14 50 20C52 14 58 10 65 10C78 10 90 20 90 35C90 58 50 88 50 88Z" />
      </svg>

      <div style={containerStyle}>
        {/* Left Side */}
        <div style={leftContentStyle}>
          {/* Badge */}
          <div style={badgeStyle}>Testimonial</div>

          {/* Title */}
          <h2 style={titleStyle}>What People Say</h2>

          {/* Subtitle */}
          <p style={subtitleStyle}>
            Let's hear from our pawrents about Cat Hotel by RR!
          </p>

          {/* Google Rating Card */}
          <div style={ratingCardStyle}>
            <div style={ratingScoreStyle}>
              <span style={scoreNumberStyle}>5.0</span>
            </div>
            <div style={ratingInfoStyle}>
              <span style={{ fontSize: fontSize.sm, color: colors.textDark, fontWeight: fontWeight.medium }}>
                Google
              </span>
              <span style={ratingLabelStyle}>average rating</span>
              <div style={ratingStarsStyle}>
                {'★★★★★'}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Testimonials */}
        <div style={testimonialsContainerStyle}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              avatar={testimonial.avatar}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

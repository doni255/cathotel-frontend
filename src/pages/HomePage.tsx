import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import BenefitSection from '../components/home/BenefitSection';
import TestimonialSection from '../components/home/TestimonialSection';
import AsSeenOnSection from '../components/home/AsSeenOnSection';
import BookingCTASection from '../components/home/BookingCTASection';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <BenefitSection />
      <TestimonialSection />
      <AsSeenOnSection />
      <BookingCTASection />
    </Layout>
  );
};

export default HomePage;

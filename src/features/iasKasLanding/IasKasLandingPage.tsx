import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import WhyStart from './sections/WhyStart';
import CourseOverview from './sections/CourseOverview';
import ProgramDifference from './sections/ProgramDifference';
import Roadmap from './sections/Roadmap';
import Statistics from './sections/Statistics';
import DesignedByExperts from './sections/DesignedByExperts';
import StudyMaterials from './sections/StudyMaterials';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import ContactForm from './sections/ContactForm';
import Footer from './sections/Footer';
import MobileCTA from './sections/MobileCTA';
import EnquiryModal from './components/EnquiryModal';

export default function IasKasLandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyStart />
        <CourseOverview />
        <ProgramDifference />
        <Roadmap />
        <Statistics />
        <DesignedByExperts />
        <StudyMaterials />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileCTA />
      <EnquiryModal />
    </>
  );
}

import CustomCursor from '@/components/hotel/CustomCursor';
import Header from '@/components/hotel/C_Header';
import Hero from '@/components/hotel/C_Hero';
import Concept from '@/components/hotel/C_Concept';
import ReservationButton from '@/components/hotel/C_ReservationButton';
import FadingImages from '@/components/hotel/FadingImages';
import Footer from '@/components/hotel/C_Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* <WelcomeScreen /> */}
      <CustomCursor />
      <Header />
      <Hero />
      <Concept />
      <ReservationButton />
      <FadingImages />
      <Footer />
    </main>
  );
}

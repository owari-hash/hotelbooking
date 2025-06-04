import MainLayout from 'src/layouts/main';
import HotelAboutView from 'src/sections/_hotel/view/hotel-about-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Бидний тухай',
};

export default function HotelAboutPage() {
  return (
    <MainLayout>
      <HotelAboutView />
    </MainLayout>
  );
}

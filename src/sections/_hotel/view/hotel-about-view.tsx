'use client';

import { _brands } from 'src/_mock';

import HotelAbout from '../about/hotel-about';
import HotelOurClients from '../about/hotel-our-clients';
import HotelAboutOurMission from '../about/hotel-about-our-mission';

// ----------------------------------------------------------------------

export default function HotelAboutView() {
  return (
    <>
      <HotelAbout />

      <HotelAboutOurMission />

      <HotelOurClients brands={_brands} />
    </>
  );
}

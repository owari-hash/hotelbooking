'use client';

import { useScroll } from 'framer-motion';

import { _brandsColor } from 'src/_mock';
import ScrollProgress from 'src/components/scroll-progress';
import HotelPopular from 'src/sections/_hotel/hotel-popular';
import HotelFeatured from 'src/sections/_hotel/hotel-featured';

import HomeHero from '../home-hero';
import HomeNewStart from '../home-new-start';
import CollaborationBrands from '../home-collaboration';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <HotelFeatured />

      <HotelPopular />

      <CollaborationBrands brands={_brandsColor} />

      <HomeNewStart />

      {/* <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner />

      <PricingHome plans={_pricingHome} />

      <HomeFAQs />

      <HomeCombination />

      <HomeAdvertisement /> */}
    </>
  );
}

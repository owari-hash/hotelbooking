import { add } from 'date-fns';

import { countries } from 'src/assets/data';
import { IHotelProps } from 'src/types/hotel';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const LOCATIONS = [
  'Сүхбаатар дүүрэг, Улаанбаатар',
  'Баянзүрх дүүрэг, Улаанбаатар',
  'Хан-Уул дүүрэг, Улаанбаатар',
  'Чингэлтэй дүүрэг, Улаанбаатар',
  'Хөвсгөл аймаг, Хатгал тосгон',
  'Өмнөговь аймаг, Даланзадгад',
  'Төв аймаг, Горхи-Тэрэлж',
  'Хөвсгөл аймаг, Мөрөн',
  'Орхон аймаг, Эрдэнэт',
  'Дорноговь аймаг, Сайншанд',
];

// Add realistic hotel names

// Update amenities with better labels
export const HOTEL_AMENITIES_OPTIONS = [
  { value: 'wifi', label: 'Үнэгүй wifi', icon: 'carbon:wifi' },
  { value: 'parking', label: 'Зогсоол', icon: 'carbon:car' },
  { value: 'pool', label: 'Усан сан', icon: 'carbon:swim' },
  { value: 'spa', label: 'Спа төв', icon: 'carbon:spa' },
  { value: 'restaurant', label: 'Ресторан', icon: 'carbon:restaurant' },
  { value: 'fitness', label: 'Фитнес төв', icon: 'carbon:gym' },
  { value: 'breakfast', label: 'Өглөөний цай', icon: 'carbon:cafe' },
  { value: 'laundry', label: 'Угаалгын үйлчилгээ', icon: 'carbon:washing-machine' },
];

export const HOTEL_SERVICE_OPTIONS = [
  { value: 'Audio guide', label: 'Нэг гоё юм' },
  { value: 'Хоол', label: 'Хоол' },
  { value: 'Lunch', label: 'Уух зүйл' },
  { value: 'Private tour', label: 'Хувийн хөтөч' },
  { value: 'Special activities', label: 'Үйл ажиллагаа' },
  { value: 'Entrance fees', label: 'Ямар нэг гоё юм' },
  { value: 'Gratuities', label: 'Хүргэлт' },
  { value: 'Pick-up and drop off', label: 'Бас нэг гоё юм' },
  { value: 'Professional guide', label: 'Аймар гоё юм' },
  {
    value: 'Transport by air-conditioned',
    label: 'Бас л нэг гоё юм',
  },
];

// Update hotel types with better categories
export const HOTEL_TYPES = [
  { value: 'hotel', label: 'Зочид буудал', icon: 'carbon:hotel' },
  { value: 'resort', label: 'Амралтын газар', icon: 'carbon:palm-tree' },
  { value: 'ger', label: 'Гэр буудал', icon: 'carbon:campsite' },
  { value: 'apartment', label: 'Апартмент', icon: 'carbon:home' },
  { value: 'guest-house', label: 'Зочны байр', icon: 'carbon:home-garage' },
];

export const VIEW_OPTIONS = [
  { value: 'list', label: 'Жагсаалт', icon: 'carbon:list' },
  { value: 'grid', label: 'Торон', icon: 'carbon:grid' },
] as const;

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Шинэ' },
  { value: 'oldest', label: 'Хуучин' },
  { value: 'popular', label: 'Алдартай' },
  { value: 'price_high', label: 'Үнэ: Их - Бага' },
  { value: 'price_low', label: 'Үнэ: Бага - Их' },
] as const;

export type ViewValue = (typeof VIEW_OPTIONS)[number]['value'];
export type SortValue = (typeof SORT_OPTIONS)[number]['value'];

const CONTENT = `
<h5>Буудлын тухай</h5>
<br/>
<p>Таны амралт, аялал, бизнес уулзалтын хамгийн таатай орчин.</p>

<br/>
<br/>

<h5>Үйлчилгээнүүд</h5>
<br/>
<ul>
  <li>24/7 үйлчилгээ</li>
  <li>Өрөөний үйлчилгээ</li>
  <li>Угтах үйлчилгээ</li>
  <li>Нэмэлт орны үйлчилгээ</li>
</ul>
`;

export const _hotels: IHotelProps[] = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  slug: _mock.tourName(index),
  type: HOTEL_TYPES[index % 4].value,
  content: CONTENT,
  price: _mock.number.price(index) * 100000,
  priceSale: _mock.number.price(index - 1) * 100000,
  rating: _mock.number.rating(index),
  reviews: _mock.number.nativeM(index),
  amenities: HOTEL_AMENITIES_OPTIONS.slice(0, (index % 6) + 2).map((option) => option.value),
  location: LOCATIONS[index] || _mock.fullAddress(index),
  coverUrl: _mock.image.travel(index),
  heroUrl: [
    '/assets/images/travel/travel_post_hero.jpg',
    '/assets/images/travel/travel_post_01.jpg',
    '/assets/images/travel/travel_post_02.jpg',
    '/assets/images/travel/travel_post_03.jpg',
    '/assets/images/travel/travel_post_04.jpg',
  ][index % 5], // Use modulo to cycle through images
  gallery: [
    '/assets/images/travel/travel_post_hero.jpg',
    '/assets/images/travel/travel_post_01.jpg',
    '/assets/images/travel/travel_post_02.jpg',
    '/assets/images/travel/travel_post_03.jpg',
    '/assets/images/travel/travel_post_04.jpg',
  ],
  duration: `${index + 1} өдөр`,
  continent: 'Asia',
  createdAt: _mock.time(index),
  available: {
    start: _mock.time(index),
    end: _mock.time(index + 1),
  },
  // Added missing properties
  favorited: _mock.boolean(index),
  services: HOTEL_SERVICE_OPTIONS.slice(0, 4).map((service) => service.value),
  description: _mock.description(index),
  languages: ['Монгол', 'English'],
  totalReviews: _mock.number.nativeL(index),
  ratingNumber: _mock.number.rating(index),
  tags: _tags.slice(0, 3),
  shareLinks: {
    facebook: `facebook/user-name`,
    instagram: `instagram/user-name`,
    linkedin: `linkedin/user-name`,
    twitter: `twitter/user-name`,
  },
  roomTypes: [...Array(4)].map((__, roomIndex) => ({
    id: _mock.id(roomIndex),
    name: ['Стандарт', 'Тансаг', 'Люкс', 'Президент'][roomIndex],
    price: _mock.number.price(roomIndex) * 100000 + roomIndex * 200000,
    available: _mock.boolean(roomIndex),
    capacity: roomIndex + 1,
  })),
  highlights: [...Array(6)].map((__, itemIndex) => _mock.sentence(itemIndex)),
  tourGuide: {
    verified: true,
    role: _mock.role(index),
    name: _mock.fullName(index),
    avatarUrl: _mock.image.avatar(index),
    quotes: 'Member since Mar 15, 2021',
    phoneNumber: _mock.phoneNumber(index),
    ratingNumber: _mock.number.rating(index),
    totalReviews: _mock.number.nativeL(index),
    about: _mock.description(index),
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  },
  program: [...Array(3)].map((__, itemIndex) => ({
    label: `Day ${itemIndex + 1}`,
    text: _mock.description(itemIndex),
  })),
}));

export const _hotelFeatured = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.tourName(index),
  description: _mock.description(index),
  price: _mock.number.price(index),
  coverUrl: _mock.image.travel(index),
}));

// ----------------------------------------------------------------------

export const _rooms = [...Array(12)].map((_, index) => {
  const location = countries.map((option) => option.label)[index + 1];

  const gallery = [...Array(6)].map((__, itemIndex) => _mock.image.travel(itemIndex + 2));

  const highlights = [...Array(6)].map((__, itemIndex) => _mock.sentence(itemIndex));

  const heroUrl = [
    '/assets/images/travel/travel_post_hero.jpg',
    '/assets/assets/images/travel/travel_post_01.jpg',
    '/assets/assets/images/travel/travel_post_02.jpg',
    '/assets/assets/images/travel/travel_post_03.jpg',
    '/assets/assets/images/travel/travel_post_04.jpg',
  ][index];

  const program = [...Array(3)].map((__, itemIndex) => ({
    label: `Day ${itemIndex + 1}`,
    text: _mock.description(itemIndex),
  }));

  const services = (index % 2 && ['Audio guide', 'Food and drinks']) ||
    (index % 3 && ['Lunch', 'Private tour']) ||
    (index % 4 && ['Special activities', 'Entrance fees']) || [
      'Gratuities',
      'Pick-up and drop off',
      'Professional guide',
      'Transport by air-conditioned',
    ];

  const roomGuide = {
    verified: true,
    role: _mock.role(index),
    name: _mock.fullName(index),
    avatarUrl: _mock.image.avatar(index),
    quotes: '2021 оноос хойш гишүүн байсан.',
    phoneNumber: _mock.phoneNumber(index),
    ratingNumber: _mock.number.rating(index),
    totalReviews: _mock.number.nativeL(index),
    about:
      'Манай тансаг зэрэглэлийн зочид буудал нь орчин үеийн тав тухтай орчинг бүрдүүлсэн бөгөөд таны амралт, аялал, ажлын хэрэгцээнд бүрэн нийцэх бүх төрлийн үйлчилгээ, тохижилтыг санал болгож байна.',
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  };

  return {
    id: _mock.id(index),
    heroUrl,
    gallery,
    program,
    location,
    services,
    roomGuide,
    highlights,
    continent: location,
    tags: _tags.slice(0, 5),
    slug: _mock.tourName(index),
    duration: '3 days 2 nights',
    createdAt: _mock.time(index),
    favorited: _mock.boolean(index),
    price: _mock.number.price(index),
    languages: ['Russian', 'Spanish'],
    coverUrl: _mock.image.travel(index),
    description: _mock.description(index),
    ratingNumber: _mock.number.rating(index),
    totalReviews: _mock.number.nativeL(index),
    priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
    available: {
      start: add(new Date(), { months: 2 }),
      end: add(new Date(), { months: 4 }),
    },
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  };
});

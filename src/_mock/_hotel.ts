import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const HOTEL_AMENITIES_OPTIONS = [
  { value: 'wifi', label: 'Wifi', icon: 'carbon:wifi' },
  { value: 'parking', label: 'Зогсоол', icon: 'carbon:car' },
  { value: 'pool', label: 'Усан сан', icon: 'carbon:swim' },
  { value: 'spa', label: 'Спа төв', icon: 'carbon:spa' },
  { value: 'restaurant', label: 'Ресторан', icon: 'carbon:restaurant' },
  { value: 'fitness', label: 'Фитнес', icon: 'carbon:gym' },
];

export const HOTEL_TYPES = [
  { value: 'hotel', label: 'Зочид буудал' },
  { value: 'resort', label: 'Амралтын газар' },
  { value: 'ger', label: 'Гэр буудал' },
  { value: 'apartment', label: 'Апартмент' },
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

export const _hotels = [...Array(12)].map((_, index) => {
  const amenities = HOTEL_AMENITIES_OPTIONS.slice(0, (index % 6) + 2).map((option) => option.value);

  const type = HOTEL_TYPES[index % 4].value;

  return {
    id: _mock.id(index),
    name: index === 0 ? 'Shangri-La Улаанбаатар' : _mock.companyName(index),
    slug: _mock.tourName(index),
    type,
    content: CONTENT,
    price: _mock.number.price(index),
    rating: _mock.number.rating(index),
    reviews: _mock.number.nativeM(index),
    amenities,
    location: _mock.fullAddress(index),
    coverUrl: _mock.image.travel(index),
    gallery: [...Array(4)].map((__, galleryIndex) => _mock.image.travel(galleryIndex)),
    createdAt: _mock.time(index),
    available: {
      startDate: _mock.time(index),
      endDate: _mock.time(index + 1),
    },
    favorite: _mock.boolean(index),
    roomTypes: [...Array(4)].map((__, roomIndex) => ({
      id: _mock.id(roomIndex),
      name: ['Энгийн', 'Том', 'Люкс', 'VIP'][roomIndex],
      price: _mock.number.price(roomIndex),
      available: _mock.boolean(roomIndex),
      capacity: roomIndex + 1,
    })),
  };
});

export const _hotelFeatured = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.tourName(index),
  description: _mock.description(index),
  price: _mock.number.price(index),
  coverUrl: _mock.image.travel(index),
}));

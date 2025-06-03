import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Энгийн өрөө',
    cover: '/assets/images/hotel/hero_1.jpg',
    items: [],
  },
  {
    order: '6',
    subheader: 'Том өрөө',
    cover: '/assets/images/hotel/hero_2.jpg',

    items: [],
  },
  {
    order: '2',
    subheader: 'Люкс өрөө',
    cover: '/assets/images/hotel/hero_3.jpg',

    items: [],
  },
  {
    order: '5',
    subheader: 'VIP - өрөө',
    cover: '/assets/images/hotel/hero_4.jpg',

    items: [],
  },
];

export const navConfig = [
  { title: 'Нүүр хуудас', path: '/' },
  { title: 'Буудлын жагсаалт', path: paths.hotel.root },
  {
    title: 'Өрөөний төрөл',
    path: paths.pages,
    children: [pageLinks[0], pageLinks[1], pageLinks[2], pageLinks[3], pageLinks[4]],
  },
  { title: 'Холбоо барих', path: paths.docs },
];

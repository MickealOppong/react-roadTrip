import img3 from './imgs/Kerala.jpg'
import img6 from './imgs/Maldives.jpg'
import img7 from './imgs/Nepal-HM.jpg'
import img5 from './imgs/dubai.jpg'
import img2 from './imgs/japan.jpg'
import img8 from './imgs/mauritius.jpg'
import img4 from './imgs/rann.jpg'
import img1 from './imgs/thailand.jpg'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home'
  },
  {
    id: 2,
    href: '#about',
    text: 'about'
  },
  {
    id: 3,
    href: '#services',
    text: 'services'
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours'
  },

]

export const pageIcons = [
  {
    id: 1,
    href: "https:/www.facebook.com",
    icon: "fab fa-facebook"
  },
  {
    id: 2,
    href: "https:/www.twitter.com",
    icon: "fa fa-twitter"
  },
  {
    id: 3,
    href: "https:/www.pinterest",
    icon: "fa fa-pinterest"
  }
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'customised tours',
    text: 'Step into the enchantment of roadtrip. give yourself a pleasant surprise'
  },
  {
    id: 2,
    icon: 'fas fa-wine-glass fa-fw',
    title: 'wine tours',
    text: 'Savor authentic flavors and fine wines of roadtrip. explore all the wins of southern france with raodtrip'
  },
  {
    id: 3,
    icon: 'fas fa-mountain fa-fw',
    title: 'ski',
    text: 'Follow us to tatra mountain of eastern europe. enjoy winter festivities of tatra'
  }
]

export const tours = [
  {
    id: 1,
    picture: img1,
    location: 'thailand',
    title: 'Temple',
    price: '1200',
    duration: '2 days',
    icon: 'fa fa-map'
  },
  {
    id: 2,
    picture: img2,
    location: 'japan',
    title: 'cherry blossom',
    price: '6000',
    duration: '10 days',
    icon: 'fa fa-map'
  },
  {
    id: 3,
    picture: img3,
    location: 'karela',
    title: 'Boat ride',
    price: '4000',
    duration: '10 days',
    icon: 'fa fa-map'
  },
  {
    id: 4,
    picture: img4,
    location: 'india',
    title: 'rann of kutch',
    price: '400',
    duration: '6 days',
    icon: 'fa fa-map'
  },
  {
    id: 5,
    img: img5,
    location: 'dubai',
    title: 'Desert exploration',
    price: '400',
    duration: '6 days',
    icon: 'fa fa-map'
  },
  {
    id: 6,
    picture: img6,
    location: 'maldives',
    title: 'Honeymoon',
    price: '1800',
    duration: '6 days',
    icon: 'fa fa-map'
  },
  {
    id: 7,
    picture: img7,
    location: 'nepal',
    title: 'Honeymoon',
    price: '3000',
    duration: '4 days',
    icon: 'fa fa-map'
  },
  {
    id: 8,
    picture: img8,
    location: 'mauritius',
    title: 'Honeymoon',
    price: '3000',
    duration: '4 days',
    icon: 'fa fa-map'
  }
]
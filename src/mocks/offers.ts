import {Offer} from '../types/offer-type';

export const CITIES: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const offers: Offer[] = [
  {
    id: '1',
    title: '12345',
    type: 'apartment',
    price: 120,
    isFavorite: false,
    isPremium: true,
    rating: 4,
    images: ['./../../../markup/img/apartment-01.jpg',
      './../../../markup/img/apartment-02.jpg',
      './../../../markup/img/apartment-03.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Heating', 'Dishwasher', 'Cabel TV'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
  },
  {
    id: '2',
    title: '23451',
    type: 'room',
    price: 80,
    isFavorite: false,
    isPremium: false,
    rating: 5,
    images: ['./../../../markup/img/apartment-03.jpg',
      './../../../markup/img/apartment-02.jpg',
      './../../../markup/img/apartment-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 1,
    maxAdults: 1,
    goods: ['Coffee machine', 'Heating', 'Kitchen', 'Cabel TV'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
  },
  {
    id: '3',
    title: '34512',
    type: 'apartment',
    price: 90,
    isFavorite: true,
    isPremium: false,
    rating: 3,
    images: ['./../../../markup/img/apartment-02.jpg',
      './../../../markup/img/apartment-01.jpg',
      './../../../markup/img/apartment-03.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century',
    bedrooms: 3,
    maxAdults: 5,
    goods: ['Coffee machine', 'Fridge', 'Towels', 'Cabel TV'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
  },
  {
    id: '4',
    title: '45123',
    type: 'apartment',
    price: 100,
    isFavorite: true,
    isPremium: true,
    rating: 2,
    images: ['./../../../markup/img/apartment-01.jpg',
      './../../../markup/img/apartment-03.jpg',
      './../../../markup/img/apartment-02.jpg'],
    description: 'Canal View Prinsengracht',
    bedrooms: 2,
    maxAdults: 3,
    goods: ['Coffee machine', 'Fridge', 'Towels', 'Heating', 'Baby seat'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
  },
];

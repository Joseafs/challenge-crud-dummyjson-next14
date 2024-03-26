/* eslint-disable sort-keys */
import { UserData } from './types';

export const mockUserResponse: UserData = {
  id: 26,
  firstName: 'Griffin',
  lastName: 'Braun',
  maidenName: 'Deckow',
  age: 35,
  gender: 'male',
  email: 'lgronaverp@cornell.edu',
  phone: '+62 511 790 0161',
  username: 'lgronaverp',
  password: '4a1dAKDv9KB9',
  birthDate: '1965-09-06',
  image: 'https://robohash.org/Griffin.png?set=set4',
  bloodGroup: 'O-',
  height: 146,
  weight: 65.5,
  eyeColor: 'Blue',
  hair: {
    color: 'Blond',
    type: 'Wavy',
  },
  domain: 'foxnews.com',
  ip: '93.246.47.59',
  address: {
    address: '600 West 19th Avenue',
    city: 'Anchorage',
    coordinates: {
      lat: 61.203115,
      lng: -149.894107,
    },
    postalCode: '99503',
    state: 'AK',
  },
  macAddress: '34:06:26:95:37:D6',
  university: 'Universitas Bojonegoro',
  bank: {
    cardExpire: '07/24',
    cardNumber: '3587188969123346',
    cardType: 'jcb',
    currency: 'Rupiah',
    iban: 'AD24 9240 6903 OD2X OW1Y WD1K',
  },
  company: {
    address: {
      address: '1508 Massachusetts Avenue Southeast',
      city: 'Washington',
      coordinates: {
        lat: 38.887255,
        lng: -76.98318499999999,
      },
      postalCode: '20003',
      state: 'DC',
    },
    department: 'Engineering',
    name: 'Boyle, Boyer and Lang',
    title: 'Senior Cost Accountant',
  },
  ein: '38-0997138',
  ssn: '407-02-8915',
  userAgent:
    'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25',
  crypto: {
    coin: 'Bitcoin',
    wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
    network: 'Ethereum (ERC20)',
  },
};

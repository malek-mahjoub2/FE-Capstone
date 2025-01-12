import axios from 'axios';

const RAPIDAPI_HOST = 'sky-scanner3.p.rapidapi.com';
const RAPIDAPI_KEY = '6c0197e667mshe3ae4cf333d67a8p178ee6jsnbe828bef6ac9'; // Move this to environment variables

export const fetchFlights = async (fromCity, departDate) => {
  try {
    const response = await axios.post(
      'https://sky-scanner3.p.rapidapi.com/flights/search-multi-city',
      {
        market: 'US',
        locale: 'en-US',
        currency: 'USD',
        adults: 1,
        children: 0,
        infants: 0,
        cabinclass: 'economy',
        stops: ['direct', '1stop', '2stops'],
        sort: 'cheapest_first',
        airlines: [-32753, -32695],
        flights: [{ fromEntityId: fromCity, toEntityId: 'TUN', departDate: departDate }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': RAPIDAPI_HOST,
          'x-rapidapi-key': RAPIDAPI_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};
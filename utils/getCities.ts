import { gql } from '@apollo/client';
import cityData from 'definitions/cityData';

import { initializeApollo } from '../apollo/client';

export const GET_WEATHER = gql`
  query GetCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;

const getCities = async (cities: string[], apolloClient = null): Promise<cityData[]> => {
  const client = apolloClient ? apolloClient : initializeApollo();

  try {
    const fetchCities = cities.map((city) => {
      return client.query({
        query: GET_WEATHER,
        variables: {
          name: city,
        },
      });
    });

    const citiesData = (await Promise.all(fetchCities)).map((cityData) => cityData.data.getCityByName);

    return citiesData;
  } catch (err) {
    console.debug('Unable to fetch weather data:', err);
  }
  return [];
};

export default getCities;

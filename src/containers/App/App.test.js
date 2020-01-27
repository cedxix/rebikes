import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {
  const defaultProps = {
    countries: {
      RU: [
        {
          location: {
            city: 'Moscow',
            country: 'RU',
            latitude: 55.75,
            longitude: 37.616667,
          },
          company: ['ЗАО «СитиБайк»'],
          href: '/v2/networks/velobike-moscow',
          id: 'velobike-moscow',
          name: 'Velobike',
        },
        {
          location: {
            city: 'Казань',
            country: 'RU',
            latitude: 55.7949414,
            longitude: 49.1050445,
          },
          company: ['JCDecaux'],
          href: '/v2/networks/velik',
          id: 'velik',
          license: {
            name: 'Open Licence',
            url: 'https://developer.jcdecaux.com/#/opendata/licence',
          },
          name: "Veli'k",
          source: 'https://developer.jcdecaux.com',
        },
      ],
      CA: [
        {
          location: {
            city: 'Montréal, QC',
            country: 'CA',
            latitude: 45.508693,
            longitude: -73.553928,
          },
          company: [
            'Motivate International, Inc.',
            'PBSC Urban Solutions',
            'BIXI Montréal',
          ],
          gbfs_href: 'https://api-core.bixi.com/gbfs/gbfs.json',
          href: '/v2/networks/bixi-montreal',
          id: 'bixi-montreal',
          name: 'Bixi',
        },
        {
          location: {
            city: 'Toronto, ON',
            country: 'CA',
            latitude: 43.653226,
            longitude: -79.3831843,
          },
          company: ['Motivate International, Inc.', 'PBSC Urban Solutions'],
          gbfs_href: 'https://tor.publicbikesystem.net/ube/gbfs/v1/',
          href: '/v2/networks/bixi-toronto',
          id: 'bixi-toronto',
          name: 'Bike Share Toronto',
        },
        {
          location: {
            city: 'Hamilton, ON',
            country: 'CA',
            latitude: 43.25643601915583,
            longitude: -79.86929655075073,
          },
          company: ['Social Bicycles Inc.'],
          gbfs_href: 'https://hamilton.socialbicycles.com/opendata/gbfs.json',
          href: '/v2/networks/sobi-hamilton',
          id: 'sobi-hamilton',
          name: 'SoBi',
        },
      ],
    },
    selectedCountry: {},
    cities: [],
    fetchNetworks: () => {},
    selectCountry: () => {},
  };

  describe('Given there is no selected country', () => {
    test('Should render nothing', () => {
      const { getByTestId } = render(<App {...defaultProps} />);
      expect(getByTestId(/citiesList/gi).firstChild).toBeFalsy();
    });
  });
  describe('Given the network are loading', () => {
    test('It should render loading...', () => {
      const { getByText, queryByTestId } = render(
        <App {...defaultProps} loading />,
      );

      expect(getByText(/loading .../gi)).toBeTruthy();
      expect(queryByTestId(/citiesList/gi)).toBeFalsy();
    });
  });
  describe('Given a country is selected', () => {
    const selectedCountry = {
      countryCode: 'CA',
      cities: [
        {
          location: {
            city: 'Montréal, QC',
            country: 'CA',
            latitude: 45.508693,
            longitude: -73.553928,
          },
          company: [
            'Motivate International, Inc.',
            'PBSC Urban Solutions',
            'BIXI Montréal',
          ],
          gbfs_href: 'https://api-core.bixi.com/gbfs/gbfs.json',
          href: '/v2/networks/bixi-montreal',
          id: 'bixi-montreal',
          name: 'Bixi',
        },
        {
          location: {
            city: 'Toronto, ON',
            country: 'CA',
            latitude: 43.653226,
            longitude: -79.3831843,
          },
          company: ['Motivate International, Inc.', 'PBSC Urban Solutions'],
          gbfs_href: 'https://tor.publicbikesystem.net/ube/gbfs/v1/',
          href: '/v2/networks/bixi-toronto',
          id: 'bixi-toronto',
          name: 'Bike Share Toronto',
        },
        {
          location: {
            city: 'Hamilton, ON',
            country: 'CA',
            latitude: 43.25643601915583,
            longitude: -79.86929655075073,
          },
          company: ['Social Bicycles Inc.'],
          gbfs_href: 'https://hamilton.socialbicycles.com/opendata/gbfs.json',
          href: '/v2/networks/sobi-hamilton',
          id: 'sobi-hamilton',
          name: 'SoBi',
        },
      ],
    };
    test('Should render the cities for that country', () => {
      const { getByTestId } = render(
        <App {...defaultProps} selectedCountry={selectedCountry} />,
      );
      expect(getByTestId(/citiesList/gi).firstChild).toBeTruthy();
      expect(getByTestId(/citiesList/gi).childNodes).toHaveLength(3);
    });
  });
});
test('renders learn react link', () => {
  expect(true).toBe(true);
});

import React from 'react';
import { render } from '@testing-library/react';
import CityCard from './CityCard';

describe('<CityCard /> ', () => {
  const defaultProps = {
   city: {
     "location": {
       "city": "Victoria",
       "country": "CA",
       "latitude": 48.4298,
       "longitude": -123.361
     },
     "company": [
       "Nextbike GmbH"
     ],
     "href": "/v2/networks/nextbike-victoria",
     "id": "nextbike-victoria",
     "name": "Nextbike"
   }
  };

  test('It should render the city data', () => {
    const { getByText } = render( <CityCard {...defaultProps} />);

    expect(getByText(/Victoria/gi)).toBeVisible();
    defaultProps.city.company.forEach((name) => {
      expect(getByText(name)).toBeTruthy();
    })
  })
});
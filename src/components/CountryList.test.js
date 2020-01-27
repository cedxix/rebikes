import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CountryList from './CountryList';

describe('<CountryList />', () => {
  const defaultProps = {
    active: null,
    onSelect: () => {},
    "countries": {
      "RU": [
        {
          "location": {
            "city": "Moscow",
            "country": "RU",
            "latitude": 55.75,
            "longitude": 37.616667
          },
          "company": [
            "ЗАО «СитиБайк»"
          ],
          "href": "/v2/networks/velobike-moscow",
          "id": "velobike-moscow",
          "name": "Velobike"
        },
        {
          "location": {
            "city": "Казань",
            "country": "RU",
            "latitude": 55.7949414,
            "longitude": 49.1050445
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/velik",
          "id": "velik",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "Veli'k",
          "source": "https://developer.jcdecaux.com"
        }
      ],
      "FR": [
        {
          "location": {
            "city": "Paris",
            "country": "FR",
            "latitude": 48.856614,
            "longitude": 2.3522219
          },
          "company": [
            "Smovengo"
          ],
          "href": "/v2/networks/velib",
          "id": "velib",
          "name": "Velib' Métropôle"
        },
        {
          "location": {
            "city": "Valence",
            "country": "FR",
            "latitude": 44.922726,
            "longitude": 4.905634
          },
          "company": [
            "PBSC Urban Solutions"
          ],
          "gbfs_href": "https://valence.publicbikesystem.net/ube/gbfs/v1/en/",
          "href": "/v2/networks/libelo",
          "id": "libelo",
          "name": "Libélo"
        },
        {
          "location": {
            "city": "Rennes",
            "country": "FR",
            "latitude": 48.114167,
            "longitude": -1.680833
          },
          "company": [
            "Keolis",
            "Rennes Metropole"
          ],
          "href": "/v2/networks/le-velo-star",
          "id": "le-velo-star",
          "name": "LE vélo Star",
          "source": "https://data.explore.star.fr/explore/dataset/vls-stations-etat-tr/"
        },
        {
          "location": {
            "city": "Bordeaux",
            "country": "FR",
            "latitude": 44.837789,
            "longitude": -0.57918
          },
          "company": [
            "Keolis Bordeaux Métropole"
          ],
          "href": "/v2/networks/v3-bordeaux",
          "id": "v3-bordeaux",
          "name": "V³"
        },
        {
          "location": {
            "city": "Lille",
            "country": "FR",
            "latitude": 50.62925,
            "longitude": 3.057256
          },
          "company": [
            "Keolis"
          ],
          "href": "/v2/networks/vlille",
          "id": "vlille",
          "name": "V'lille"
        },
        {
          "location": {
            "city": "Pau",
            "country": "FR",
            "latitude": 43.2951,
            "longitude": -0.370797
          },
          "company": [
            "Keolis",
            "STAP"
          ],
          "href": "/v2/networks/idecycle",
          "id": "idecycle",
          "name": "IDECycle"
        },
        {
          "location": {
            "city": "Rouen",
            "country": "FR",
            "latitude": 49.44323199999999,
            "longitude": 1.099971
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/cyclic",
          "id": "cyclic",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "cy'clic",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Toulouse",
            "country": "FR",
            "latitude": 43.604652,
            "longitude": 1.444209
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/velo",
          "id": "velo",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "Vélô",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Amiens",
            "country": "FR",
            "latitude": 49.894067,
            "longitude": 2.295753
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/velam",
          "id": "velam",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "Velam",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Mulhouse",
            "country": "FR",
            "latitude": 47.750839,
            "longitude": 7.335888
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/velocite-mulhouse",
          "id": "velocite-mulhouse",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "VéloCité",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Lyon",
            "country": "FR",
            "latitude": 45.764043,
            "longitude": 4.835659
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/velov",
          "id": "velov",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "Vélo'V",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Nancy",
            "country": "FR",
            "latitude": 48.692054,
            "longitude": 6.184417
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/velostanlib",
          "id": "velostanlib",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "vélOstan'lib",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Créteil",
            "country": "FR",
            "latitude": 48.790367,
            "longitude": 2.455572
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/cristolib",
          "id": "cristolib",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "Cristolib",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Cergy",
            "country": "FR",
            "latitude": 49.03561699999999,
            "longitude": 2.060325
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/velo2",
          "id": "velo2",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "Velo2",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Marseille",
            "country": "FR",
            "latitude": 43.296482,
            "longitude": 5.36978
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/le-velo",
          "id": "le-velo",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "Le vélo",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Nantes",
            "country": "FR",
            "latitude": 47.218371,
            "longitude": -1.553621
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/bicloo",
          "id": "bicloo",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "Bicloo",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Besançon",
            "country": "FR",
            "latitude": 47.237829,
            "longitude": 6.024053899999999
          },
          "company": [
            "JCDecaux"
          ],
          "href": "/v2/networks/velocite-besancon",
          "id": "velocite-besancon",
          "license": {
            "name": "Open Licence",
            "url": "https://developer.jcdecaux.com/#/opendata/licence"
          },
          "name": "VéloCité",
          "source": "https://developer.jcdecaux.com"
        },
        {
          "location": {
            "city": "Dunkerque",
            "country": "FR",
            "latitude": 51.0383,
            "longitude": 2.3775
          },
          "company": [
            "Veolia"
          ],
          "href": "/v2/networks/dkvelo",
          "id": "dkvelo",
          "name": "DK'Vélo"
        },
        {
          "location": {
            "city": "Nice",
            "country": "FR",
            "latitude": 43.695949,
            "longitude": 7.271413
          },
          "company": [
            "Veolia"
          ],
          "href": "/v2/networks/velobleu",
          "id": "velobleu",
          "name": "Vélo Bleu"
        },
        {
          "location": {
            "city": "Vannes",
            "country": "FR",
            "latitude": 47.6559,
            "longitude": -2.7603
          },
          "company": [
            "Veolia"
          ],
          "href": "/v2/networks/velocea",
          "id": "velocea",
          "name": "Vélocéa"
        },
        {
          "location": {
            "city": "Calais",
            "country": "FR",
            "latitude": 50.95,
            "longitude": 1.85
          },
          "company": [
            "Veolia"
          ],
          "href": "/v2/networks/vel-in",
          "id": "vel-in",
          "name": "Vél'in"
        },
        {
          "location": {
            "city": "Clermont-Ferrand",
            "country": "FR",
            "latitude": 45.770958,
            "longitude": 3.073871
          },
          "company": [
            "Smoove"
          ],
          "href": "/v2/networks/c-velo",
          "id": "c-velo",
          "name": "C.Vélo"
        },
        {
          "location": {
            "city": "Saint-Étienne",
            "country": "FR",
            "latitude": 45.396667,
            "longitude": 4.290833
          },
          "company": [
            "Smoove"
          ],
          "href": "/v2/networks/velivert",
          "id": "velivert",
          "name": "VéliVert"
        },
        {
          "location": {
            "city": "Avignon",
            "country": "FR",
            "latitude": 43.943689,
            "longitude": 4.805833
          },
          "company": [
            "Smoove"
          ],
          "href": "/v2/networks/velopop",
          "id": "velopop",
          "name": "Vélopop"
        }
      ],
      "CA": [
        {
          "location": {
            "city": "Montréal, QC",
            "country": "CA",
            "latitude": 45.508693,
            "longitude": -73.553928
          },
          "company": [
            "Motivate International, Inc.",
            "PBSC Urban Solutions",
            "BIXI Montréal"
          ],
          "gbfs_href": "https://api-core.bixi.com/gbfs/gbfs.json",
          "href": "/v2/networks/bixi-montreal",
          "id": "bixi-montreal",
          "name": "Bixi"
        },
        {
          "location": {
            "city": "Toronto, ON",
            "country": "CA",
            "latitude": 43.653226,
            "longitude": -79.3831843
          },
          "company": [
            "Motivate International, Inc.",
            "PBSC Urban Solutions"
          ],
          "gbfs_href": "https://tor.publicbikesystem.net/ube/gbfs/v1/",
          "href": "/v2/networks/bixi-toronto",
          "id": "bixi-toronto",
          "name": "Bike Share Toronto"
        },
        {
          "location": {
            "city": "Hamilton, ON",
            "country": "CA",
            "latitude": 43.25643601915583,
            "longitude": -79.86929655075073
          },
          "company": [
            "Social Bicycles Inc."
          ],
          "gbfs_href": "https://hamilton.socialbicycles.com/opendata/gbfs.json",
          "href": "/v2/networks/sobi-hamilton",
          "id": "sobi-hamilton",
          "name": "SoBi"
        },
        {
          "location": {
            "city": "Ottawa, ON",
            "country": "CA",
            "latitude": 45.4285325522342,
            "longitude": -75.6970576741095
          },
          "company": [
            "CycleHop, LLC",
            "Social Bicycles Inc."
          ],
          "gbfs_href": "http://velogo.ca/opendata/gbfs.json",
          "href": "/v2/networks/velogo",
          "id": "velogo",
          "name": "VeloGO"
        },
        {
          "location": {
            "city": "Vancouver",
            "country": "CA",
            "latitude": 49.2827,
            "longitude": -123.1207
          },
          "company": [
            "Vanncouver Bike Share Inc",
            "CycleHop LLC",
            "City of Vancouver",
            "Smoove SAS"
          ],
          "href": "/v2/networks/mobibikes",
          "id": "mobibikes",
          "name": "Mobi"
        },
        {
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
      ],
    }
  };

  describe('Given the component is mounted', () => {
    test('Should render nothing if no data', () => {
      const { getByTestId } = render(<CountryList {...defaultProps} countries={{}} />);
      expect(getByTestId(/countryListUl/).childNodes).toHaveLength(0)
    });
    test('Should render the list of countries', () => {
      const { getByTestId } = render(<CountryList {...defaultProps} />);
      expect(getByTestId(/countryListUl/).childNodes).toHaveLength(3);
      Object.keys(defaultProps.countries).forEach((countryCode) => {
        expect(getByTestId(countryCode)).toBeInTheDocument();
        expect(getByTestId(countryCode)).not.toHaveClass('active');
      })
    })
  });
  describe('Given a component is selected', () => {
    test('Should mark element as selected', () => {
      const { getByTestId } = render(<CountryList {...defaultProps} active="CA" />);
      expect(getByTestId(/CA/gi)).toHaveClass('active')
    })
  });

});
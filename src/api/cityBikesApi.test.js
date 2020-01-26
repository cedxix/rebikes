import axios from 'axios';
import config from '../app.config'
import {
  fetchNetworks
} from './cityBikesApi'

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('cityBikesApi', () => {
  test('It should fetchNetworks', () => {
    fetchNetworks();
    expect(axios.get).toHaveBeenCalledWith(`${config.API_BASE}networks`)
  })
});
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getHotelsData, sortDataByPrice } from '../utils/service';
import { Sort } from '../utils/eumns';
import mockData from '../../public/data.json';

const mock = new MockAdapter(axios);

describe('test getHotelsData api', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should fetch and return data when API call is successful', async () => {
    mock.onGet('/data.json').reply(200, mockData);
    const result = await getHotelsData();
    expect(result).toEqual(mockData.results);
  });

  it('should return an empty array when API call fails', async () => {
    mock.onGet('/data.json').reply(500);
    const result = await getHotelsData();
    expect(result).toEqual([]);
  });

  it('should return an empty array when API call returns non-200 status', async () => {
    mock.onGet('/data.json').reply(404);
    const result = await getHotelsData();
    expect(result).toEqual([]);
  });
});

describe('sortDataByPrice', () => {
  it('should return an empty array when data is empty', () => {
    const result = sortDataByPrice([], Sort.asc);
    expect(result).toEqual([]);
  });

  it('should sort data in ascending order', () => {
    const result = sortDataByPrice(mockData.results, Sort.asc);
    for (let i = 1; i < result.length; i++) {
      expect(result[i].offer.displayPrice.amount).toBeGreaterThanOrEqual(result[i - 1].offer.displayPrice.amount);
    }
  });

  it('should sort data in descending order', () => {
    const result = sortDataByPrice(mockData.results, Sort.des);
    for (let i = 1; i < result.length; i++) {
      expect(result[i].offer.displayPrice.amount).toBeLessThanOrEqual(result[i - 1].offer.displayPrice.amount);
    }
  });
});
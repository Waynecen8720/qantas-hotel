import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ResultObj, getHotelsData } from '../utils/service';

const mock = new MockAdapter(axios);

describe('test getHotelsData api', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should fetch and return data when API call is successful', async () => {
    const mockData: { results: ResultObj[] } = {
      results: [
        {
          "id": "cxd650nuyo",
          "property": {
            "propertyId": "P107801",
            "title": "Courtyard by Marriott Sydney-North Ryde",
            "address": ["7-11 Talavera Rd","North Ryde"],
            "previewImage": {
              "url": "https://unsplash.it/145/125/?random",
              "caption": "Image of Courtyard by Marriott Sydney-North Ryde",
              "imageType": "PRIMARY"
            },
            "rating": {
              "ratingValue": 4.5,
              "ratingType": "self"
            }
          },
          "offer": {
            "promotion": {
              "title": "Exclusive Deal",
              "type": "MEMBER"
            },
            "name": "Deluxe Balcony Room",
            "displayPrice": {
              "amount": 329.000000000,
              "currency": "AUD"
            },
            "savings": {
              "amount": 30.000000000,
              "currency": "AUD"
            },
            "cancellationOption": {
              "cancellationType": "NOT_REFUNDABLE"
            }
          }
        }
      ],
    };

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
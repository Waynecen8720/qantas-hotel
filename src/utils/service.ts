import axios, { AxiosResponse } from "axios";
import { Sort } from "./eumns";

export interface Offer {
  promotion: {
    title: string,
    type: string,
  },
  name: string,
  displayPrice: {
    amount: number,
    currency: string,
  },
  savings: {
    amount: number,
    currency: string,
  },
  cancellationOption: {
    cancellationType: string
  }
}

interface ResultObj {
  id: string,
  property: {
    propertyId: string,
    title: string,
    address: Array<string>,
    previewImage: {
      url: string,
      caption: string,
      imageType: string,
    },
    rating: {
      ratingValue: number,
      ratingType: string,
    }
  },
  offer: Offer
}

export type HotelData = ResultObj[] | [];

export const getHotelsData = async(): Promise<HotelData> => axios.get("/data.json").then((response: AxiosResponse) => {
  if (response.status === 200) {
    return response.data.results;
  }
  return [];
}).catch(error => {
  console.log("Api Error");
  return [];
});

export const sortDataByPrice = (data: HotelData, sortOrder: Sort): HotelData => {
  if (data.length <= 0) return [];
  const dataCopy: HotelData = [...data];
  return dataCopy.sort((pre, curr) => {
    const prePrice: number = pre.offer?.displayPrice?.amount ? pre.offer.displayPrice.amount : 0;
    const currPrice: number = curr.offer?.displayPrice?.amount ? curr.offer.displayPrice.amount : 0;
    if (sortOrder === Sort.asc) {
      return prePrice - currPrice;
    } else {
      return currPrice - prePrice;
    }
  });
}
import axios, { AxiosResponse } from "axios";

export interface ResultObj {
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
  offer: {
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
}

export const getHotelsData = async(): Promise<ResultObj[] | []> => {
  try {
    const response: AxiosResponse = await axios.get("/data.json");
    if (response.status === 200) {
      
      return response.data.results;
    }
    return [];
  } catch (error) {
    console.log("Api Error");
    return [];
  }
};
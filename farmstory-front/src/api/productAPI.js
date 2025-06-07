import axios from "axios";
import { PRODUCT_LIST, PRODUCT_REGISTER } from "./_http";

export const getProductAll = async (pg) => {
  try {
    const response = await axios.get(`${PRODUCT_LIST}?pg=${pg}`, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postProduct = async (data) => {
  try {
    const response = await axios.post(`${PRODUCT_REGISTER}`, data, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

import axios from "axios";
import { USER_LOGIN, USER_LOGOUT, USER_REGISTER, USER_TERMS } from "./_http";

export const getTerms = async () => {
  try {
    const response = await axios.get(`${USER_TERMS}`);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postUser = async (data) => {
  try {
    const response = await axios.post(`${USER_REGISTER}`, data, {
      withCredentials: true, // true로 해야 CORS 환경에서 쿠키값 전송
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postUserLogin = async (data) => {
  try {
    const response = await axios.post(`${USER_LOGIN}`, data, {
      withCredentials: true, // 토큰 생성 시 사용 (필수), 서버에서 쿠키값을 받을 수 있음
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserLogout = async (data) => {
  try {
    const response = await axios.get(`${USER_LOGOUT}`, {
      withCredentials: true, // 토큰 생성 시 사용 (필수), 서버에서 쿠키값을 받을 수 있음
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

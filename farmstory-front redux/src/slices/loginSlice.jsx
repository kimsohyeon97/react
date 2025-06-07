import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loadStateFromCookie = () => {
  const username = Cookies.get("username");

  return { username };
};
const initState = {
  username: "",
  // 토큰 값이 있으면 access_token, 없으면 null
  // accssToken: Cookies.get("access_token") || null,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadStateFromCookie() || initState,
  reducers: {
    // 함수들, state = initState
    login: (state, action) => {
      // 리덕스 username 초기화
      const data = action.payload; // 서버에서 받아온 데이터를 action으로 보냄.
      state.username = data.username;

      // username 쿠키 저장
      Cookies.set("username", state.username, 1);
    },
    logout: (state) => {
      state.username = null;

      // 쿠키 삭제
      Cookies.remove("username");
      //Cookies.remove("access_token");
      //Cookies.remove("refresh_token");
    },
  },
});

export const { login, logout } = loginSlice.actions; // 쉽게 접근하기 위해 내보내기
export default loginSlice.reducer;

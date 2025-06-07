import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export const User1Modify = () => {
  // 폼 전송 state
  const [user, setUser] = useState({
    uid: "",
    name: "",
    hp: "",
    age: 0,
  });
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const uid = searchParams.get("uid");
  console.log("uid : " + uid);

  // 컴포넌트 Mount될 때  한번 호출
  useEffect(() => {
    axios
      .get(`http://localhost:8080/ch09/user1/${uid}`)
      .then((response) => {
        console.log(response.data);

        // state 초기화
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 핸들러
  const submitHandler = (e) => {
    e.preventDefault();

    // 서버 전송
    axios
      .put("http://localhost:8080/ch09/user1", user)
      .then((response) => {
        console.log(response.data);

        // 목록 컴포넌트 전환
        navigate("/user1/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="User1Modify">
      <h4>User1 수정</h4>
      <form onSubmit={submitHandler}>
        <table border={1}>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input type="text" name="uid" value={user.uid} readOnly />
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>휴대폰</td>
              <td>
                <input
                  type="text"
                  name="hp"
                  value={user.hp}
                  onChange={changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>나이</td>
              <td>
                <input
                  type="text"
                  name="age"
                  value={user.age}
                  onChange={changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="right">
                <input type="submit" value={"수정"} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

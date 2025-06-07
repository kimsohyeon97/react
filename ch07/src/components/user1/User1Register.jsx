import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const User1Register = () => {
  const navigate = useNavigate();

  // 폼 전송 state
  const [user, setUser] = useState({
    uid: "",
    name: "",
    hp: "",
    age: 0,
  });

  // 핸들러
  const submitHandler = (e) => {
    e.preventDefault();

    // 서버 전송
    axios
      .post("http://localhost:8080/ch09/user1", user)
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
    <div className="User1Register">
      <h4>User1 등록</h4>
      <form onSubmit={submitHandler}>
        <table border={1}>
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="uid"
                value={null}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input
                type="text"
                name="name"
                value={null}
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
                value={null}
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
                value={null}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="right">
              <input type="submit" value={"등록"} />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

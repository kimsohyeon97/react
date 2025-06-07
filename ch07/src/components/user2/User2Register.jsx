import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const User2Register = () => {
  const navigate = useNavigate();

  // 폼 전송 state
  const [user, setUser] = useState({
    uid: "",
    name: "",
    birth: "",
    addr: 0,
  });

  // 핸들러
  const submitHandler = (e) => {
    e.preventDefault();

    // 서버 전송
    axios
      .post("http://localhost:8080/ch09/user2", user)
      .then((response) => {
        console.log(response.data);

        // 목록 컴포넌트 전환
        navigate("/user2/list");
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
    <div className="User2Register">
      <h4>User2 등록</h4>
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
            <td>생년월일</td>
            <td>
              <input
                type="date"
                name="birth"
                value={null}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <input
                type="text"
                name="addr"
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

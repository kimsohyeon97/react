import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const User1List = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("here...1");
    axios
      .get("http://localhost:8080/ch09/user1")
      .then((response) => {
        console.log("here...2");
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 수정하기
  const modifyHandler = (user) => {
    console.log(user);

    // 수정 컴포넌트 전환 리액트에서 사용하는 컴포넌트 주소
    navigate(`/user1/modify?uid=${user.uid}`);
  };

  // 삭제하기
  const deleteHandler = (user) => {
    // API 주소
    axios
      .delete(`http://localhost:8080/ch09/user1/${user.uid}`)
      .then((response) => {
        console.log(response.data);

        // 목록 갱신을 위해서 state 업데이트
        setUsers(users.filter((u) => u.uid !== user.uid));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //prettier-ignore
  return (
    <div className="User1List">
      <h4>User1 목록</h4>
      <table border="1">
        <tbody>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>휴대폰</th>
            <th>나이</th>
            <th>관리</th>
          </tr>
          
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.hp}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={()=>{modifyHandler(user)}}>수정</button>
                <button onClick={()=>{deleteHandler(user)}}>삭제</button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// 데이터 요청 함수
const fetchUsers = async () => {
  const response = await axios.get("http://localhost:8080/ch09/user2");
  return response.data;
};

// 삭제 요청 함수
const deleteUser = async (uid) => {
  const response = await axios.delete(
    `http://localhost:8080/ch09/user2/${uid}`
  );
  return response;
};

export const User2List = () => {
  //const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // 리액트 쿼리 객체
  const queryClient = useQueryClient();

  // 데이터 불러오기
  const {
    data: users = [], // 쿼리 함수가 성공적으로 반환한 데이터
    isLoading, // 쿼리 함수가 데이터를 가져오는 중이면 true, 데이터가 이미 캐시에 있으면 false
    isError, // 쿼리 함수가 실행 중 통신 오류가 발생하면 true
  } = useQuery({
    queryKey: ["User2List"], // 쿼리 키는 통신 식별값
    queryFn: fetchUsers, // 통신 요청 함수
    staleTime: 1000 * 60 * 1, // 1분, 데이터는 신선하다고 여겨지는 시간, 데이터가 staleTime 이내면 서버 요청을 하지 않음
  });

  // 삭제 mutation 정의
  const deleteMutation = useMutation({
    mutationFn: (uid) => deleteUser(uid),
    onSuccess: () => {
      // 목록 쿼리 무효화, 쿼리키 User2List 요청을 다시 수행
      queryClient.invalidateQueries(["User2List"]);
    },
  });

  // 수정하기
  const modifyHandler = (user) => {
    console.log(user);

    // 수정 컴포넌트 전환
    navigate(`/user2/modify?uid=${user.uid}`);
  };

  // 삭제하기
  const deleteHandler = (user) => {
    // React-Query 삭제 요청하기
    deleteMutation.mutate(user.uid);
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>에러 발생...</div>;
  }

  //prettier-ignore
  return (
    <div className="User2List">
      <h4>User2 목록</h4>
      <table border="1">
        <tbody>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>생년월일</th>
            <th>주소</th>
            <th>관리</th>
          </tr>
          
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.birth}</td>
              <td>{user.addr}</td>
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

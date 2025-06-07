# react
### 1️⃣ 개발 환경 설정
Node.js 설치

VSCode 확장:

ES7+ React Snippets

ESLint, Prettier

브라우저 도구:

React Developer Tools

Vite 기반 프로젝트 생성

bash
코드 복사
npm create vite@latest # → React + JavaScript + SWC 선택
npm install
npm run dev

---

### 2️⃣ JSX 문법 실습
변수 출력, 조건부 렌더링, 반복 렌더링

Fragment 사용 (<></>, <Fragment>)

JS 이벤트 핸들링 (onClick, onChange, onSubmit)

스타일링 방법

인라인 스타일

SCSS

styled-components

Tailwind CSS

---

### 3️⃣ 컴포넌트 실습
#### 함수형 컴포넌트 (FunctionComponent)

#### 클래스형 컴포넌트 (ClassComponent)

* 상태 관리 (this.state)

* 생명주기 메서드 (componentDidMount, componentDidUpdate, componentWillUnmount 등)

#### Props 전달 및 children 사용

#### 부모-자식 컴포넌트 관계

---

### 4️⃣ React Hooks 실습

#### 사용한 훅 목록
| Hook          | 설명                                        |
| ------------- | ----------------------------------------- |
| `useState`    | 상태값 관리 (기본값, 객체, 배열 등 다양한 형태의 상태 다룸)      |
| `useEffect`   | 컴포넌트 생명주기(마운트, 업데이트, 언마운트)에 따른 사이드 이펙트 처리 |
| `useRef`      | DOM 요소 직접 접근 및 값 참조                       |
| `useReducer`  | 복잡한 상태 로직 처리 (상태 + 액션 기반)                 |
| `useMemo`     | 성능 최적화를 위한 계산 결과 메모이제이션                   |
| `useCallback` | 함수 재생성을 막아 성능 최적화                         |
| `Custom Hook` | `useCounter` 훅을 직접 만들어 상태 재사용 구현          |

---

### 5️⃣ React Router

- **기본 라우팅**: 단순한 경로 기반 컴포넌트 전환  
- **중첩 라우팅 (Outlet)**: 부모-자식 구조 라우팅 구현  
- **데이터 전달 방식**:  
  - 쿼리 스트링 (`/result1?name=...`)  
  - URL 파라미터 (`/result2/:name/:email/:age`)  
  - `state` 객체 전송 (`useLocation`)  
- **사용자 정의 Router**: `createBrowserRouter`로 라우터 구성

---

### 6️⃣ Context API와 Redux를 사용한 React 상태 관리 실습

**Context API**
- 전역 카운터 상태 관리 (증가, 감소, 리셋)
- 사용자 목록 등록 및 출력

**Redux (Redux Toolkit)**
- 카운터 상태 관리 (증가, 감소, 리셋)

**화면 구성**
#### Context API 컴포넌트

- 부모-자식 컴포넌트 간 상태 공유

- 사용자 등록/출력

#### Redux 컴포넌트

- 중앙 저장소 기반 상태 관리

---

### 7️⃣ React + SpringBoot User 관리

간단한 사용자 등록, 목록, 수정, 삭제 기능을 구현

#### 구현 기능
#### 공통
* 사용자 등록 (POST)
* 사용자 목록 조회 (GET)
* 사용자 정보 수정 (PUT)
* 사용자 삭제 (DELETE)

#### 상세 설명
| 기능      | 설명                                                      |
| ------- | ------------------------------------------------------- |
| 사용자 목록  | 전체 사용자 데이터를 불러와 테이블 형태로 출력합니다.                          |
| 사용자 등록  | 입력 폼을 통해 사용자 이름, 나이, 주소를 등록합니다.                         |
| 사용자 수정  | 수정 버튼 클릭 시 기존 사용자 정보를 수정할 수 있습니다.                       |
| 사용자 삭제  | 삭제 버튼 클릭 시 사용자 정보를 제거합니다.                               |
| 페이지 이동  | React Router를 사용해 페이지 전환 구현 (/list, /register, /modify) |
| 입력 값 검증 | 간단한 입력값 확인 로직 포함 (예: 빈 값 체크 등)                          |

#### User1 (기본 Axios 사용)
* useEffect와 Axios를 직접 사용
* React Query 없이 기본 상태 관리로 처리

#### User2 (React Query 적용)
* React Query의 useQuery, useMutation, invalidateQueries 사용
* 자동 캐싱 및 리패칭 기능 활용

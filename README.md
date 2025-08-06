# 🎮 Final-14-z1zone1004 - 포텐게임 프로젝트

## 📌 프로젝트 개요
- **프로젝트명**: 포텐게임 (PotenGame)
- **목표**: 게임 상품 판매를 위한 반응형 웹사이트 구축
- **주요 기능**: 상품 리스트, 상세 페이지, 장바구니, 결제, 회원가입/로그인, 관리자 페이지

---

## 🖼️ 주요 화면 구성 및 UI 구조

### 🏠 메인 페이지  
- 배너, 추천 상품, 카테고리별 게임 리스트  
- 반응형 구조로 PC/태블릿/모바일 모두 대응  
🔗 [피그마 디자인 보기](https://www.figma.com/design/8TP0tsKHT2BWPThthqh3XZ/z1%EC%A1%B4%ED%8F%AC%ED%85%901004---final-project?node-id=0-1&t=wGKzQFjFvdCcnHYr-0)


---

### 🛍️ 상품 목록 페이지
- 필터링, 정렬 기능 포함
- 카드형 UI로 구성된 게임 리스트  
🔗 [피그마 디자인 보기](https://www.figma.com/design/8TP0tsKHT2BWPThthqh3XZ/z1%EC%A1%B4%ED%8F%AC%ED%85%901004---final-project?node-id=0-1&t=wGKzQFjFvdCcnHYr-0)


---

### 📄 상품 상세 페이지
- 게임 정보, 가격, 구매 버튼, 리뷰 영역
- 구매 안내 및 사용자 리뷰 기능 포함  
🔗 [피그마 디자인 보기](https://www.figma.com/design/8TP0tsKHT2BWPThthqh3XZ/z1%EC%A1%B4%ED%8F%AC%ED%85%901004---final-project?node-id=0-1&t=wGKzQFjFvdCcnHYr-0)


---

### 🙋‍♂️ 마이페이지
- 관심 목록, 배송 주소록, 회원 정보 관리, 고객센터
- 사이드바 및 하단 GNB로 빠른 접근 가능  
🔗 [피그마 디자인 보기](https://www.figma.com/design/8TP0tsKHT2BWPThthqh3XZ/z1%EC%A1%B4%ED%8F%AC%ED%85%901004---final-project?node-id=0-1&t=wGKzQFjFvdCcnHYr-0)


---

### 🧑‍💼 회원가입 / 프로필 페이지
- 사용자 정보 입력 및 수정
- 에러 메시지 및 유효성 검사 포함  
🔗 [피그마 디자인 보기](https://www.figma.com/design/8TP0tsKHT2BWPThthqh3XZ/z1%EC%A1%B4%ED%8F%AC%ED%85%901004---final-project?node-id=0-1&t=wGKzQFjFvdCcnHYr-0)


---

## 📱 반응형 디자인

- **디바이스 대응**: PC, 태블릿, 모바일
- **레이아웃 변화**:
  - 📱 모바일: 햄버거 메뉴, 카드형 리스트, 하단 GNB
  - 📟 태블릿: 2단 구성
  - 🖥️ PC: 전체 레이아웃 노출

---

## 🧩 UI 프레임 구조

| 프레임명     | 구성 요소                          |
|-------------|-----------------------------------|
| Frame#1     | 메인 페이지 전체 구조             |
| Frame#2     | 헤더 및 네비게이션 바             |
| Frame#3     | 상품 리스트 및 상세 페이지         |
| Frame#4     | 장바구니 및 결제 화면             |
| Frame#5     | 로그인/회원가입 화면              |
| Frame#6     | 관리자 페이지 및 대시보드          |
| Frame#error | 에러 페이지 (404, 500 등)         |

---

## 🛠️ 사용 기술 스택

### 💻 Frontend
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Zustand](https://img.shields.io/badge/react%20zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

### ⚙️ Backend
- Node.js
- Express

### 🗄️ Database
- MongoDB

### 🚀 Deployment
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
- AWS

### 🤝 협업 툴
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)

---

## 🔐 사용자 흐름

1. **비회원**: 메인 → 상품 보기 → 로그인/회원가입  
2. **회원**: 로그인 → 상품 구매 → 장바구니 → 결제  
3. **관리자**: 로그인 → 상품 관리 → 주문 확인

---

## 👥 팀원 소개

| 이름     | 역할 | 담당 업무 | GitHub |
|----------|------|-----------|--------|
| 이도울   | PM   | 헤더 GNB, 로그인, 회원가입, 유저기록관리 | [dooollee](https://github.com/dooollee) |
| 송채은   | PL   | 메인페이지, 모바일 하단 GNB, Footer, 장바구니, 상품구매, 검색, 좋아요 | [chaeeun-nim](https://github.com/chaeeun-nim) |
| 배동초   | DR   | 마이페이지, 주문조회, 유저상세조회, 주소등록, 게시판UI | [sua17](https://github.com/sua17) |
| 김태우   | PR   | 상품 목록 조회, 필터링, 정렬, 상세 페이지, 페이지 경로관리 | [twkimfe](https://github.com/twkimfe) |

---

## 📣 기타 참고 사항

- 모든 페이지는 **에러 처리** 및 **로딩 상태**를 고려하여 설계됨  
- UI는 **일관된 컬러 팔레트**와 **폰트 스타일**을 유지  
- 관리자 페이지는 **권한 인증**을 통해 접근 제한

---

## 🔗 배포 및 문서 링크

- 🌐 **Live Demo**: [포텐게임 웹사이트](https://poten-game.vercel.app/)
- 📘 **프로젝트 문서 (Notion)**: [팀 노션 페이지](https://www.notion.so/14-z1-1004-22973873401a80b88e1bca614d28504b)

---

## 🧪 로컬 개발 및 테스트

### 📥 프로젝트 클론 및 의존성 설치
```bash
git clone https://github.com/FRONTENDBOOTCAMP-13th/Final-14-z1zone1004.git
npm i
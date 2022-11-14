# 2022 포트폴리오

<a href="https://h-m-portfolio.netlify.app/" target="_blank"><img src="./public/assets/portfolio.png" /></a>

이미지를 클릭하면 사이트로 이동합니다.

<br>

---

## #package

- typescript
- react-slick
- typeit
- @mui/icons-material

---

## #route

- Home
  - 프로젝트, 공부한 내용(6개),교육이력, 자격증, 셀프인터뷰
- StudiesPage
  - 공부한 내용 (전체)
- DetailPage
  - 프로젝트 디테일 페이지
- NotFound
  - 잘못된 루트로 이동했을 경우 나타나는 페이지

---

## #Home

- 새로고침을 하거나 처음 방문하게 된다면 1초동안 loading 화면이 나타나고, 그 이후에 Home 화면이 출력됨

### 1. Intro Section

<img src="./mdImg/portfolio2022.png">

구성 : 이름 + 간단한 소개 + 깃허브 , 블로그, 이력서 링크

- Typeit 라이브러리를 이용해 간단한 소개 멘트를 키보드로 글씨를 치는 듯한 애니메이션을 구현

---

### 2. About Section

<img src="./mdImg/about.png">
구성 : 자기소개 + 기본정보 + 가지고 있는 기술 스택

- Typeit 라이브러리를 이용해 자기소개 멘트를 키보드로 글씨를 치는 듯한 애니메이션을 구현

- 사용 가능한 기술과 능숙하지는 않지만 사용해본 경험이 있는 기술 스택을 기술함

---

### 3. 개인 프로젝트 Section

<img src="./mdImg/projects.png">

구성 : 개인 프로젝트 리스트

- 상세보기 버튼을 누르면 디테일 페이지로 이동해 보다 프로젝트에 대해 자세한 내용을 알 수 있음
- 사이트 가기 버튼을 누르면 해당 프로젝트의 배포 사이트로 이동함

---

### 4. 공부한 내용 Section

<img src="./mdImg/hm-study.png">
구성 : 개발 공부를 하며 작업했던 개인 프로젝트들

- Home Route : 더 보러가기 버튼을 누르면 Studies Route로 이동
- Studies Route : 모든 데이터를 확인 할 수 있음
- 상단에 필터를 누르면 해당 키워드에 맞는 데이터들만 필터링되어 나타남
- git , 배포 사이트 url의 여부에 따라 각각 다른 버튼들을 출력함
- <> 버튼을 누르면 코드 (Github) 사이트로 이동
- web 버튼을 누르면 배포 사이트로 이동

---

### 5. 교육 및 기타 이력 Section

<img src="./mdImg/exp.png">
구성 : 교육 이력 + 개발 관련 외 기타 이력 + 자격증

---

### 6. 셀프인터뷰 Section

<img src="./mdImg/interview.png">
구성 : 질문에 답하는 인터뷰 내용 (3개)

- react-slick을 이용하여 슬라이드 형태로 인터뷰 내용을 나타냄
- 하단 페이지네이션을 클릭하면 다음 인터뷰 내용을 볼 수 있음

---

## DetailPage Route

<img src="" />
구성 : 프로젝트

---

## NotFound Route

<img src="./mdImg/notfound.png" />
구성 : 찾을 수 없는 페이지 멘트 + Home으로 이동할 수 있는 버튼

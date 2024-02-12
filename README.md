# ElicePA

## 프로젝트 소개

이 PA 는 엘리스 기능중 하나인 과목 검색의 간소화된 버전을 구현하는 것입니다. 실제 페이지는 https://academy.elice.io/courses/all 에서 확인할 수 있습니다.

## 프로젝트 과정

1. 프로젝트와 관련해 학습을 진행했습니다.
2. 프로젝트 구상 계획을 세웠습니다.

   1. repo 생성
      <img width="1259" alt="image" src="https://github.com/Lim-JiSeon/ElicePA/assets/83554018/6d973653-6405-4a5e-99ec-80264762b903">

   2. issues 작성
      <img width="1097" alt="image" src="https://github.com/Lim-JiSeon/ElicePA/assets/83554018/ab33ddfd-16a9-45c7-a38e-50c048a38857">

   3. issues에 맞춰 branch 생성
      <img width="962" alt="image" src="https://github.com/Lim-JiSeon/ElicePA/assets/83554018/533d5753-19fb-4b5a-9709-9a570ea8be20">

   4. code 작업
      <img width="1128" alt="image" src="https://github.com/Lim-JiSeon/ElicePA/assets/83554018/82aae648-f574-4839-9459-10c73007f1b4">

   5. git push 후 git pull request
      <img width="1151" alt="image" src="https://github.com/Lim-JiSeon/ElicePA/assets/83554018/f78c7fd1-8cf8-4b63-aaf9-10c133f32320">

   6. git merge (코드 리뷰와 approve는 개인 프로젝트였기 때문에 생략)
      <img width="760" alt="image" src="https://github.com/Lim-JiSeon/ElicePA/assets/83554018/0ac3b240-ff6c-4e96-852f-a7e3b7e1165d">

   7. 프로젝트 배포
      <img width="1162" alt="image" src="https://github.com/Lim-JiSeon/ElicePA/assets/83554018/4330ec43-454f-44f9-90bc-8b47cbdef547">

3. 프로젝트 구현 과정을 기간 내 한 곳까지 README.MD를 작성했습니다.

## 문제 해결

### url query

- sessionStorage를 이용했습니다. 각 chip별로 unique한 값인 name을 부여한 뒤 toggle switch처럼 checked할 경우(click해서 checked가 true일 경우) 배열에 name을 넣었습니다.(chip.tsx 참고)
- 배열을 토대로 해당 query 값을 정의한 뒤 배열값인 name을 key로 사용해 query 값을 가져왔습니다.(filterQuery.ts 참고)
- 오름차순으로 정렬한 뒤 join 함수를 사용해 &로 string 화 시켜 Router.push 했습니다.
- 이때 next의 next dynamic route를 이용했으며, query 값이 없을 경우도 고려해 [[...query]]를 사용했습니다.(Optional Catch-all Segments)

## 배포 링크

https://elice-pa-ten.vercel.app/

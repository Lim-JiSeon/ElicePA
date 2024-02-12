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

## 못한 부분

- pagination

  - 시간 안에 구현을 못해 제가 한 이전 프로젝트 중 작업한 pagination 코드 부분을 첨부합니다.
  - 마감일이 끝난 이후에도 작업을 계속해 완성할 수 있도록 하겠습니다.
  - 졸업 프로젝트로 작년 1학기 때 진행했으며, 기본적으로 1~10 까지의 페이지가 있으며, 1일때 왼쪽 화살표를 클릭할 경우 페이지가 이동되지 않도록 설정했습니다.(오른쪽도 마찬가지)
  - react와 js, styled-components를 사용했습니다.
  - [프로젝트 pagination 코드 링크](https://github.com/HUFS-Capstone-23-01/TravelFeelDog-Web/blob/main/src/containers/Community.jsx)

  ```js
  // pagination 로직 부분

  const changePage = (count) => {
    if (page % 10 == 0) {
      pageClick[9] = false;
    } else {
      pageClick[(page % 10) - 1] = false;
    }
    if (count % 10 == 0) {
      pageClick[9] = true;
    } else {
      pageClick[(count % 10) - 1] = true;
    }
    console.log("count = ", count);
    page[0] = count;
    setPage([...page]);
    setPageClick([...pageClick]);
    console.log("page = ", page);
    searchTag();
  };

  const nextPage = (direction) => {
    if (direction == "right") {
      for (let i = 0; i < 10; i++) {
        pageNumbers[i] += 10;
      }
      setPageNumbers([...pageNumbers]);
    } else {
      if (pageNumbers[0] - 10 <= 0) {
        setPageNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      } else {
        for (let i = 0; i < 10; i++) {
          pageNumbers[i] -= 10;
        }
        setPageNumbers([...pageNumbers]);
      }
    }
    page[0] = pageNumbers[0];
    setPage([...page]);
    searchTag();
  };
  ```

  ```js
  // pagination css 부분

  const Style = {
  PageList: styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 3vh 0;
  `,
  PageNum: styled.div`
   display: flex;
   flex-direction: row;
  `,
  Num: styled.div`
   padding: 0 1vw;
  `,
  NextBtn: styled.button`
   border: none;
   background-color: transparent;
   &:hover{
     color: #81E768;
   }
   ${({isselected}) =>
     isselected ?`
       color: #81E768;
       font-weight: bold;
     `
     :`
       color: #000000;
     `
   }
  `
  };,

  <Style.PageList>
       <Style.NextBtn onClick={() => nextPage("left")}><FontAwesomeIcon icon={faChevronLeft} color="#94E0AC" size="2x" /></Style.NextBtn>
         <Style.PageNum>
           {pageNumbers.map(number => {
             return (
               <Style.NextBtn key={number} isselected={number == page? 1: 0} onClick={() => changePage(number)}><Style.Num>{number}</Style.Num></Style.NextBtn>
             )})
           }
         </Style.PageNum>
         <Style.NextBtn onClick={() => nextPage("right")}><FontAwesomeIcon icon={faChevronRight} color="#94E0AC" size="2x" /></Style.NextBtn>
       </Style.PageList>
  ```

- api 연결

  - 시간 안에 구현을 못해 제가 한 이전 프로젝트 중 작업한 api 연결 작업 코드 부분을 첨부합니다.
  - 마감일이 끝난 이후에도 작업을 계속해 완성할 수 있도록 하겠습니다.
  - 부트캠프 중 진행한 프로젝트로 작년 하반기 때 진행했습니다.
  - next 환경에서 scss를 사용했습니다.
  - [프로젝트 링크](https://github.com/Lim-JiSeon/FEDC4_Price-PCC_DONGYOUNG)
  - [프로젝트 api 연결 작업 코드 링크](https://github.com/Lim-JiSeon/FEDC4_Price-PCC_DONGYOUNG/blob/main/src/services/search/index.ts)

```ts
// 검색어를 통해 filtering 된 게시물을 가져오는 작업 코드

import { apiClient } from "@/lib/axios";

export const getSearchData = async (keyword: string) => {
  try {
    const { data } = await apiClient.get(`/api/search/all/${keyword}`);
    return data;
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message);
  }
};
```

## 배포 링크

https://elice-pa-ten.vercel.app/

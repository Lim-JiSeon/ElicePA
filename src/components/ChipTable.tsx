import React from "react";
import { Chip } from "./Chip";


export const ChipTable = () => {
  return (
    <div className="chip-table-container">
      <div className="chip-table-row">
        <div className="chip-table-title">
          <div className="chip-table-title-text">유형</div>
        </div>
        <div className="chip-table-chips">
          <Chip text="과목" name={1} />
          <Chip text="챌린지" name={2} />
          <Chip text="테스트" name={3} />
        </div>
      </div>
      <div className="chip-table-row">
        <div className="chip-table-title">
          <div className="chip-table-title-text">진행 방식</div>
        </div>
        <div className="chip-table-chips">
          <Chip text="자유 선택형" name={4} />
          <Chip text="순차 완료형" name={5} />
        </div>
      </div>
      <div className="chip-table-row">
        <div className="chip-table-title">
          <div className="chip-table-title-text">분야</div>
        </div>
        <div className="chip-table-chips">
          <Chip text="프로그래밍 기초" name={6} />
          <Chip text="데이터 분석" name={7} />
          <Chip text="웹" name={8} />
          <Chip text="인공지능" name={9} />
          <Chip text="알고리즘" name={10} />
        </div>
      </div>
      <div className="chip-table-row">
        <div className="chip-table-title">
          <div className="chip-table-title-text">난이도</div>
        </div>
        <div className="chip-table-chips">
          <Chip text="입문" name={11} />
          <Chip text="초급" name={12} />
          <Chip text="중급" name={13} />
          <Chip text="고급" name={14} />
          <Chip text="심화" name={15} />
        </div>
      </div>
      <div className="chip-table-row">
        <div className="chip-table-title">
          <div className="chip-table-title-text">언어</div>
        </div>
        <div className="chip-table-chips">
          <Chip text="C" name={16} />
          <Chip text="C++" name={17} />
          <Chip text="자바" name={18} />
          <Chip text="파이썬" name={19} />
          <Chip text="자바스크립트" name={20} />
          <Chip text="R" name={21} />
          <Chip text="HTML/CSS" name={22} />
          <Chip text="SQL" name={23} />
          <Chip text="아두이노" name={24} />
          <Chip text="스크래치" name={25} />
          <Chip text="코틀린" name={26} />
          <Chip text="스위프트" name={27} />
          <Chip text="엔트리" name={28} />
        </div>
      </div>
      <div className="chip-table-row end">
        <div className="chip-table-title">
          <div className="chip-table-title-text">가격</div>
        </div>
        <div className="chip-table-chips">
          <Chip text="무료" name={29} />
          <Chip text="유료" name={30} />
          <Chip text="구독" name={31} />
          <Chip text="학점" name={32} />
        </div>
      </div>

      <style jsx>{`
        .chip-table-container {
          width: 100%;
          border: 1px solid rgb(225, 226, 228);
          background-color: #ffffff;

          .chip-table-row {
            border-bottom: 1px solid rgb(225, 226, 228);
            display: flex;

            .chip-table-title {
              display: flex;
              min-width: 96px;
              padding: 14px 16px;
              background-color: rgb(249, 250, 252);
              border-right: 1px solid rgb(225, 226, 228);

              .chip-table-title-text {
                color: #5e5f61;
                font-weight: 700;
                font-size: 12px;
              }
            }

            .chip-table-chips {
              padding: 0 8px;
            }
          }

          .end {
            border: none;
          }
        }
      `}</style>
    </div>
  );
};

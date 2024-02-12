import React from "react";

export const Pagination = () => {
  const totalCourse = 45; // 임시 값 fetch data
  const page = [];

  for (let i = 0; i < Math.ceil(totalCourse / 20); i++) {
    page.push(i + 1);
  }

  return (
    <div className="">
      <div>
        <div>
          <button></button>
        </div>
        <div>
          {page.map((pageNumber) => (
            <button key={pageNumber}>{pageNumber}</button>
          ))}
        </div>
        <div>
          <button></button>
        </div>
      </div>

      <style jsx>{`
        
      `}</style>
    </div>
  );
};

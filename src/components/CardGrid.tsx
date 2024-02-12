import SampleArray from "@/constants/SampleArray";
import React from "react";
import { Card } from "./Card";

export const CardGrid = () => {
  const data = SampleArray;

  return (
    <div className="card-grid">
      {data.map((value) => (
        <div key={value.courses.id} className="card-wrap">
          <Card data={value} />
        </div>
      ))}

      <style jsx>{`
        .card-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(296px, 1fr));
          grid-auto-rows: minmax(338px, 1fr);
          gap: 16px;
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
};

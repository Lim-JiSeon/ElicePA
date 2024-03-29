import { filterQuery } from "@/constants/filterQuery";
import SessionStorage from "@/utils/SessionStorage";
import Router from "next/router";
import React, { useEffect, useState } from "react";

type ChipProps = {
  text: string;
  name: number;
};

export const Chip = ({ text, name }: ChipProps) => {
  const [checked, setChecked] = useState(false);
  const array = SessionStorage.getItem("chip-value") ?? [];

  const handleClick = () => {
    setChecked(!checked);

    const newArray = checked
      ? array.filter((element: number) => element !== name)
      : [...array, name];

    SessionStorage.setItem("chip-value", newArray);

    const chipsArray = newArray.sort((a: number, b: number) => a - b);

    const chipQuery = chipsArray
      .map((value: number) => filterQuery[value])
      .sort()
      .join("&");

    Router.push({
      pathname: chipQuery,
      query: { tab: "course" },
    });
  };

  useEffect(() => {
    const initChecked = SessionStorage.getItem("chip-value")?.includes(name);
    setChecked(initChecked);
  }, [name]);

  return (
    <button
      key={name}
      className={`chip-button ${checked ? "checked" : ""}`}
      onClick={handleClick}>
      <span>{text}</span>

      <style jsx>{`
        .chip-button {
          background-color: #f0f1f3;
          color: #5e5f61;
          padding: 4px 12px;
          margin: 8px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
        }

        .checked {
          background-color: #524fa1;
          color: #ffffff;
        }

        button:hover {
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2)
          );
        }
      `}</style>
    </button>
  );
};

import SessionStorage from "@/utils/SessionStorage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type ChipProps = {
  text: string;
  name: string;
  queryKey: string;
  value: number | boolean;
};

export const Chip = ({ text, name, queryKey, value }: ChipProps) => {
  const initChecked = SessionStorage.getItem("chip-value")?.name;
  const [checked, setChecked] = useState(initChecked);

  const handleClick = () => {
    setChecked(!checked);

    const chipValue = checked ? "" : `${queryKey}=${value}`;
    SessionStorage.setItem("chip-value", `{ ${name}: ${chipValue} }`);
  };

  return (
    <button
      key={name}
      className={`chip-button ${checked ? "checked" : ""}`}
      data-checked={checked}
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

        button:hover {
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2)
          );
        }

        .checked {
          background-color: #524fa1;
          color: #ffffff;
        }
      `}</style>
    </button>
  );
};

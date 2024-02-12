import React from "react";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  const { push, query } = useRouter();

  const debouncedSearch = debounce((keyword: string) => {
    push({ query: { ...query, keyword: keyword } }, undefined, {
      shallow: true,
    });
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  }

  return (
    <div className="search-bar-wrap">
      <div className="search-bar-container">
        <div className="search-bar-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="search-bar-input-container">
          <input
            placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>
      <style jsx>{`
        .search-bar-wrap {
          width: 100%;

          .search-bar-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            border: 1px solid rgb(201, 202, 204);
            border-radius: 4px;

            .search-bar-icon {
              padding-left: 16px; //margin: 0 16px;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
            }

            .search-bar-input-container {
              margin: 0 12px;
              position: relative;
              display: flex;
              width: 100%;

              input {
                padding: 12px 0;
                width: 100%;
                border: none;
                outline: none;
              }

              input::placeholder {
                color: gray;
              }
            }
          }
        }

        .search-bar-container:focus-within {
          outline: 1px solid #524fa1;
        }
      `}</style>
    </div>
  );
};

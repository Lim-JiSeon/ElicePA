import Chart from "@/utils/images/chart.png";
import Calendar from "@/utils/images/calendar.png";
import Laptop from "@/utils/images/laptop.png";
import Image from "next/image";
import React from "react";

type CardProps = {
  data: {
    courseCount: number;
    courses: {
      id: number;
      course_type: number;
      tags: string[];
      title: string;
      short_description: string;
      logo_file_url: string;
      image_file_url: string;
      enrolled_role_period: null;
      enrolled_role_begin_datetime: null;
      enrolled_role_end_datetime: null;
      begin_datetime: number;
      end_datetime: number;
      is_discounted: boolean;
      discounted_price: string;
      discounted_price_usd: string;
      discount_rate: null;
      price: string;
      price_usd: string;
      enroll_type: number;
      is_free: boolean;
    };
  };
};

export const Card = ({ data }: CardProps) => {
  return (
    <a className="card-wrap">
      <div className="card-container">
        <div className="card-contents-container">
          <div className="card-field">
            <div className="card-field-text">프로그래밍 기초</div>
          </div>
          <div className="card-title">
            <div className="card-title-text">{data.courses.title}</div>
          </div>
          <div className="card-detail">
            <div className="card-detail-text">
              {data.courses.short_description}
            </div>
          </div>
          <div className="card-contents">
            <div className="card-info">
              <div className="card-level">
                <Image src={Chart} width={24} height={24} alt="" />
                <span>난이도 : </span>
              </div>
              <div className="card-course">
                <Image src={Laptop} width={24} height={24} alt="" />
                <span>수업 : </span>
              </div>
              <div className="card-period">
                <Image src={Calendar} width={24} height={24} alt="" />
                <span>기간 : </span>
              </div>
            </div>
            <div className="card-icon">
              <Image
                src={data.courses.logo_file_url}
                width={52}
                height={52}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="card-price-container">
          <div className="card-price-line"></div>
          <div className="card-price">무료</div>
        </div>
      </div>

      <style jsx>{`
        a {
          text-decoration: none;

          .card-container {
            min-height: 338px;
            min-width: 296px;
            white-space: normal;
            overflow: hidden;
            border: 1px solid rgba(225, 226, 228, 0.75);
            background-color: rgb(255, 255, 255);
            border-radius: 8px;
            box-sizing: border-box;

            .card-contents-container {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;
              background: rgb(255, 255, 255);
              padding: 28px 24px 0 24px;

              .card-field {
                margin-bottom: 8px;
                height: 18px;

                .card-field-text {
                  font-size: 12px;
                  font-weight: bold;
                  color: #524fa1;
                  max-height: 25.6px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }

              .card-title {
                min-height: 45px;
                margin-bottom: 8px;
                font-size: 18px;
                font-weight: bold;
                color: #222;
                line-height: 1.6;

                .card-title-text {
                  display: block;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  max-height: 51.2px;
                }
              }

              .card-detail {
                margin-bottom: 8px;
                font-size: 14px;
                color: #5e5f61;
                line-height: 1.6;

                .card-detail-text {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  max-height: 51.2px;
                }
              }

              .card-contents {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 8px;

                .card-info {
                  .card-level,
                  .card-period,
                  .card-course {
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;

                    i {
                      width: 24px;
                      height: 24px;
                      overflow: hidden;
                    }
                  }

                  span {
                    font-size: 12px;
                    color: #7d7e80;
                    padding-left: 8px;
                  }
                }
              }
            }

            .card-price-container {
              .card-price {
                padding: 16px 24px;
                border-top: 1px solid #f0f1f3;
              }
            }
          }
        }
      `}</style>
    </a>
  );
};

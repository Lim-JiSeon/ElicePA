import Head from "next/head";
import { Inter } from "next/font/google";
import { SearchZone } from "@/components/SearchZone";
import { CardGrid } from "@/components/CardGrid";

const inter = Inter({ subsets: ["latin"] });

const CourseSearch = () => {
  return (
    <>
      <Head>
        <title>Course Search</title>
      </Head>
      <main className={`${inter.className}`}>
        <div className="main-container">
          <SearchZone />
          <div className="total-course-count">전체 {228}개</div>
          <CardGrid />
        </div>
      </main>

      <style jsx>{`
        .main-container {
          max-width: 1280px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 24px;

          .total-course-count {
            width: 100%;
            display: flex;
            padding: 12px 0;
            font-size: 12px;
            font-weight: bold;
            border-bottom: 1px solid rgb(225, 226, 228);
          }
        }
      `}</style>
    </>
  );
};

export default CourseSearch;

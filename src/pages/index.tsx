import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const CourseSearch = () => {
  return (
    <>
      <Head>
        <title>Course Search</title>
      </Head>
      <main className={`${inter.className}`}>
      </main>
    </>
  );
};

export default CourseSearch;

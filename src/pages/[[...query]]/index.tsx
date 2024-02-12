import Head from "next/head";
import { Inter } from "next/font/google";
import { SearchZone } from "@/components/SearchZone";

const inter = Inter({ subsets: ["latin"] });

const CourseSearch = () => {
  return (
    <>
      <Head>
        <title>Course Search</title>
      </Head>
      <main className={`${inter.className}`}>
        <SearchZone />
      </main>
    </>
  );
};

export default CourseSearch;

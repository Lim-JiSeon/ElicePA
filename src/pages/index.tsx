import Head from "next/head";
import { Inter } from "next/font/google";
import { SearchBar } from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

const CourseSearch = () => {
  return (
    <>
      <Head>
        <title>Course Search</title>
      </Head>
      <main className={`${inter.className}`}>
        <SearchBar />
      </main>
    </>
  );
};

export default CourseSearch;

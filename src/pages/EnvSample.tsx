import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const EnvSample: NextPage = (props) => {
  console.log(`process.env.TEST`, process.env.TEST);
  console.log("procees.env.PublicTest", process.env.NEXT_PUBLIC_TEST);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        {/* 서버 사이드에서 화면을 그릴 때에는 test1이라고 표시되며,
         클라이언트 사이드에서 다시 그릴 때에는 아무것도 표시되지 않는다 */}
        <p>{process.env.TEST}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("process.env.TEST", process.env.TEST);
  console.log("process.env.NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST);

  return {
    props: {},
  };
};
export default EnvSample;

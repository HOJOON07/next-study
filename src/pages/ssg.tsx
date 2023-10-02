import { NextPage, GetStaticProps, NextPageContext } from "next";
import Head from "next/head";

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;
  return (
    <div>
      {/* Head 컴포넌트로 감싸면, 그 요소는 <head> 태그에 배치된다. */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timeStamp = new Date().toLocaleString();
  const message = `${timeStamp}에 getStaticProps가 실행됐습니다.`;
  console.log(message);
  return {
    props: {
      message,
    },
  };
};

export default SSG;

//Next Page 는 pages를 위한 타입입니다. 받을 props를 결정하고, NextPage<Props> 와 같이 지정합니다.

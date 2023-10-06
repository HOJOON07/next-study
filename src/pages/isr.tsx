import { GetStaticPaths, NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type ISRProps = {
  message: string;
};

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        <p>이 페이지는 ISR을 통해 빌드 시 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}에 이 페이지의 getStaticProps가 실행됐습니다.`;

  return {
    props: {
      message,
    },
    revalidate: 60,
  };

  //revalidate는 페이지의 유효 기간을 초로 나타낸 것을 반환합니다.
  //이후 요청에 대해서는 revalidate에서 지정한 시간 내에는 서버사이드에서 그려서 저장하고 있던 페이지를 반환하고, 유효 기간이 지난 뒤 요청이 있는 경우에는, 해당 요청에 대해서는 현재 저장돼 있는 페이지를 반환합니다.
};

export default ISR;

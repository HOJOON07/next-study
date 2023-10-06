import { NextPage } from "next";
import Image from "next/image";
import BibleImage from "../public/images/bible.jpg";

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>이미지 표시 비교</h1>
      <p>img 태그로 표시한 경우</p>
      <Image src={BibleImage} alt="성경 이미지"></Image>
      <p>Image로 표시한 경우는 사전에 그리기 영역이 확보됩니다.</p>
    </div>
  );
};

export default ImageSample;

// intrinsic은 뷰포트가 이미지 크기보다 작을 때, 뷰포트에 맞춰 리사이즈한 이미지를 표시한다.
// responsive는 뷰포트에 맞춰 리사이즈한 이미지를 표시한다.
// fixed는 width와 height에 기반해, 뷰포트의 크기에 관계없이 같은 사이즈 이미지를 표시한다.
// fill은 부모 요소에 맞춰서 이미지를 표시한다.

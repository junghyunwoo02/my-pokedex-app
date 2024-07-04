import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src="/404pokemon.jpg"
        priority
        alt="404페이지 이미지"
        width={500}
        height={500}
      />
      <h2 className="font-bold mt-4 text-lg">
        ⚠️원하시는 페이지를 찾을 수 없습니다.
      </h2>
      <p className="text-center mt-4">
        찾으려는 페이지의 주소가 잘못 입력되었거나,
        <br /> 주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다. <br />
        입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.
      </p>
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        뒤로 가기
      </Link>
    </div>
  );
};

export default NotFoundPage;

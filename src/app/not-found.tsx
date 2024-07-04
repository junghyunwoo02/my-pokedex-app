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
      <h2 className="font-bold mt-4 text-lg">⚠️ 앗! 여긴 어디죠?</h2>
      <p className="text-center mt-4">
        아직 지구상에 존재하지 않는 주소를 미리 입력하셨군요!
        <br />
        피카츄가 말해주길, 아니면 요청하신 페이지의 주소가 변경, 삭제되어 찾을
        수 없다네요. <br />
      </p>
      <br />
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        메인으로
      </Link>
    </div>
  );
};

export default NotFoundPage;

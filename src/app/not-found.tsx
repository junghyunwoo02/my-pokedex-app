import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src="/404pokemon.jpg"
        alt="404페이지 이미지"
        width={500}
        height={500}
      />
      <p className="mt-4 text-lg">존재하지 않는 페이지입니다.</p>
    </div>
  );
};

export default NotFoundPage;

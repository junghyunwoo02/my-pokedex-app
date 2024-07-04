import React from "react";
import Image from "next/image";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin">
        <Image
          src="/pokeball.png"
          priority
          alt="Loading..."
          width={50}
          height={50}
        />
      </div>
      <p className="text-xl font-semibold">불러오는 중입니다...</p>
    </div>
  );
};

export default LoadingSpinner;

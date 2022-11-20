import Image from "next/image";
import React, { useRef, useState } from "react";

const ImageInput = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string>("");
  const [imageBoolean, setImageBoolean] = useState<boolean>(false);

  const buttn_name: string[] = ["모자", "상의", "하의", "신발", "아우터"];

  const handleClick = () => {
    fileRef?.current?.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setImages(URL.createObjectURL(e.target.files[0]));
    setImageBoolean(true);
    console.log(imageBoolean);
  };

  return (
    <div className="font-Pretendard ">
      <div className="flex items-center justify-center">
        <input
          ref={fileRef}
          name="file"
          type="file"
          id="file"
          accept="image/jpeg,image/jpg,image/png"
          onChange={handleChange}
          className="hidden"
        />

        <button
          className={`${
            imageBoolean ? "hidden" : ""
          } text-2xl my-10 w-[700px] h-[600px] border-dashed border-2 border-slate-900`}
          onClick={handleClick}
        >
          이미지 업로드
        </button>
        {images && (
          <img
            alt="test"
            src={images}
            width="700px"
            height="700px"
            className="my-10"
          />
        )}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl mx-10">원하는 태그를 선택해 주세요.</div>
        <div className="grid grid-cols-5 gap-4 p-2">
        <button className=" bg-white border-gray-300 text-gray-400 rounded shadow border w-28 h-9">#모자</button>
        <button className=" bg-white border-gray-300 text-gray-400 rounded shadow border w-28 h-9">#상의</button>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;

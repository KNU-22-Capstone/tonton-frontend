import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";

const ImageInput = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string>("");
  const [imageBoolean, setImageBoolean] = useState<boolean>(false);

  const buttn_name: string[] = ["모자", "상의", "하의", "신발", "아우터"];
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleClick = () => {
    fileRef?.current?.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setImages(URL.createObjectURL(e.target.files[0]));
    setImageBoolean(true);
  };

  const handleCancel = (e: any) => {
    setImages("");
    setImageBoolean(false);
  }

  return (
    <div className="font-Pretendard ">
      <div className="flex items-center justify-center flex-row m-5">
        <div className="">
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
            } text-2xl my-10 w-[600px] h-[600px] border-dashed border-2 rounded border-slate-900`}
            onClick={handleClick}
          >
            이미지 업로드
          </button>
          {images && (
            <Image
              alt="test"
              src={images}
              width={600}
              height={600}
              className="my-10 object-cover"
            />
          )}
        </div>
        <div className={`${imageBoolean ? '' : 'hidden'} flex flex-col h-[600px] justify-center items-center ml-5`}>
          <div className="text-3xl py-5">원하는 태그를 선택해 주세요.</div>
          <div className="grid grid-cols-5 gap-4 p-2">
            <button className=" bg-white border-gray-300 text-gray-400 rounded shadow border w-28 h-9">
              #모자
            </button>
            <button className=" bg-white border-blue-400 text-blue-400 rounded shadow border w-28 h-9">
              #상의
            </button>
          </div>
          <div className="w-full font-bold mt-auto">
            <button className="bg-slate-800 text-white w-full p-2 rounded justify-end">메칭하기</button>
            <button onClick={handleCancel} className="bg-rose-700 text-white w-full p-2 rounded justify-end">취소하기</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">코디</h1>
        <div className="text-3xl">를 원하는 옷 이미지를 업로드해 보세요.</div>
      </div>
    </div>
  );
};

export default ImageInput;

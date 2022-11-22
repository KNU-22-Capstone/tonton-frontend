import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";

const ImageInput = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string>();
  const [imageBoolean, setImageBoolean] = useState<boolean>(false);
  const TagButtonName: string[] = ["모자", "상의", "하의", "신발", "아우터"];

  const handleClick = () => {
    fileRef?.current?.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setImages(URL.createObjectURL(e.target.files[0]));
    setImageBoolean(true);
  };

  const handleCancel = (e: any) => {
    window.location.reload();
    setImageBoolean(false);
  };

  const handle_TagButtonClock = () => {
    
  }

  return (
    <div className="font-Pretendard ">
       <div className={`${imageBoolean ? 'hidden' : ''} text-center mt-6 text-2xl`}>
       <span className="font-bold">코디</span><span> 아직도 망설이시나요?</span>
        <br/>
        <span className="font-bold">이미지 업로드</span><span>를 클릭해 코디를 원하는</span>
        <br/>
        <span>옷 이미지를 업로드 해 보세요.</span>
      </div>
      <div className="flex items-center justify-center flex-row m-2">
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
            } text-2xl my-5 w-[600px] h-[600px] border-dashed border-2 rounded border-slate-900`}
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
        <div
          className={`${
            imageBoolean ? "" : "hidden"
          } flex flex-col h-[600px] justify-center items-center ml-5`}
        >
          <div className="text-3xl py-5">원하는 태그를 선택해 주세요.</div>
          <div className="grid grid-cols-5 gap-4 p-2">
                {TagButtonName.map((tagButton, i) => (
                <button
                  key={i}
                  onClick={handle_TagButtonClock}
                  className= "bg-white border-gray-300 text-gray-400 rounded shadow border w-28 h-9"
                >{`#${tagButton}`}</button>
              ))}
            <button className=" bg-white border-blue-400 text-blue-400 rounded shadow border w-28 h-9">
              #상의
            </button>
          </div>
          <div className="w-full font-bold mt-auto">
            <button className="bg-slate-800 text-white w-full p-2 rounded">
              메칭하기
            </button>
            <button
              onClick={handleCancel}
              className="bg-rose-700 text-white w-full p-2 rounded"
            >
              취소하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;

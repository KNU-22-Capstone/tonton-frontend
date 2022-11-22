import React, { useCallback, useDebugValue, useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase/client";
import { DocumentData } from "firebase/firestore";

const Main_Rank_Card = () => {
  type clothType = {
    link: string;
    price: string;
    title: string;
    imageIRL: string;
  };

  const [clothes, setClothes] = useState<clothType[]>([]);
  const arr: clothType[] = [];
  const usersCollectionRef = collection(db, "테스트2");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getDocs(usersCollectionRef);
    data.forEach((doc: DocumentData) => {
      arr.push(doc.data());
    });
    setClothes(arr);
  };

  return (
    <div className="font-Pretendard flex flex-row justify-center items-center m-10">
      <div>
        {clothes.map((cloth, i) => (
          <div
            key={i}
          >{`이름: ${cloth.title} 가격: ${cloth.price} 주소: ${cloth.link}`}</div>
        ))}
      </div>
    </div>
  );
};

export default Main_Rank_Card;

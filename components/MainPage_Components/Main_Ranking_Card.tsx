import React, { useCallback, useDebugValue, useState } from "react";
import { useEffect } from "react";
import {
  collection,
  getDocs,
  where,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase/client";
import { DocumentData } from "firebase/firestore";

const Main_Rank_Card = () => {
  type clothType = {
    detail_tag: string;
    major_tag: string;
    name: string;
    picture_URL: string;
    price: number;
    site_URL: string;
    site_name: string;
    views: number;
  };

  const [clothes, setClothes] = useState<clothType[]>([]);
  const arr: clothType[] = [];
  const usersCollectionRef = collection(db, "의류");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const q = await query(
      usersCollectionRef,
      //where("tag", "==", "무신사"),
      orderBy("name", "asc"),
    );

    const data = await getDocs(q);
    data.forEach((doc: DocumentData) => {
      arr.push(doc.data());
    });
    setClothes(arr);
  };

  return (
    <div className="font-Pretendard flex flex-row justify-center items-center m-10">
      <div>
        {clothes.map((cloth, i) => (
          <div key={i}>
            {`이름: ${cloth.name}`}
            <img src={cloth.picture_URL}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main_Rank_Card;

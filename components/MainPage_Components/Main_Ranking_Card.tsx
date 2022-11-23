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
import Link from "next/link";

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

  const formatter = new Intl.NumberFormat("ko", {
    style: "currency",
    currency: "KRW",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const q = await query(
      usersCollectionRef,
      //where("tag", "==", "무신사"),
      orderBy("price", "desc"),
      limit(10)
    );

    const data = await getDocs(q);
    data.forEach((doc: DocumentData) => {
      arr.push(doc.data());
    });
    console.log(arr);
    setClothes(arr);
  };

  return (
    <div className="font-Pretendard flex flex-row justify-center items-center m-10">
      <div className="flex flex-row">
        {clothes.map((cloth, i) => (
          <div key={i}>
            <img src={cloth.picture_URL} />
            {`${cloth.name}`}
            <div className="flex">
              <div className="font-bold">{`${formatter.format(cloth.price)}`}</div>
              <div>원</div>
            </div>
            {
              <Link
                target="_blank"
                className="text-blue-400"
                href={`https://${cloth.site_URL}`}
              >
                MUSINSA
              </Link>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main_Rank_Card;

import React, { useCallback, useDebugValue, useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase/client";

const Main_Rank_Card = () => {
  const [names, setNames] = useState<string[]>([]);

  const arr: string[] = [];
  const usersCollectionRef = collection(db, "상품");
  useEffect(() => {
    fetchData();
    //console.log(arr);
  }, []);

  const fetchData = async () => {
    const data = await getDocs(usersCollectionRef);
    data.forEach((doc) => {
      arr.push(doc.data().name);
      console.log(doc.data())
    });
    setNames(arr)
  };
  return (
    <div>
      {
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Main_Rank_Card;

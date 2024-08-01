'use client';

import { usedummyData, DummyData, Change_Bank_Info } from "@/app/dummyDatas";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DetailPageProps {
  params: {
    detailId: string;
  };
}

export default function DetailPage({ params }: DetailPageProps) {
  const dummyDatas = usedummyData((state) => state.dummyDatas);
  const [info, setInfo] = useState<DummyData | null>(null);
  const [bank_kor, setBank_KOR] = useState('default');
  
  useEffect(() => {
    const data = dummyDatas.find((dummydata: DummyData) => dummydata.account === params.detailId);
    setInfo(data || null);
    if(data){
      const kor_data = Change_Bank_Info(data.bank)
      setBank_KOR(kor_data);
    }
  }, [dummyDatas, params.detailId]);


  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="bg-gray-800 rounded-lg w-80 p-5 shadow-lg text-white mb-5">
        <div className="flex justify-between">
          <span>이름: </span>
          <span>{info.name}</span>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg w-80 p-5 shadow-lg text-white mb-5">
        <div className="flex justify-between">
          <span>계좌 번호: </span>
          <span>{info.account}({bank_kor})</span>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg w-80 p-5 shadow-lg text-white mb-5">
        <div className="flex justify-between">
          <span>피해 금액: </span>
          <span>{info.amount}원</span>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg w-80 p-5 shadow-lg text-white mb-5">
        <div className="flex justify-between">
          <span>피해 건수: </span>
          <span>{info.count}</span>
        </div>
      </div>
      <div className="border-t border-gray-600 w-full my-2"></div>
      <Link href="/">
        <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 mt-5">홈으로 가기</button>
      </Link>
      <Link href="/search">
        <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 mt-5">검색 화면으로 가기</button>
      </Link>
      <br />
      <button>
        삭제(임시)
      </button>
    </div>
  );
}
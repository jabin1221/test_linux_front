'use client';

import { usedummyData, DummyData } from "@/app/dummyDatas";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DetailPageProps {
  params: {
    detailId: string;
  };
}

export default function DetailPage({ params }: DetailPageProps) {
  const dummyDatas = usedummyData(state => state.dummyDatas);
  const [info, setInfo] = useState<DummyData | null>(null);

  useEffect(() => {
    const data = dummyDatas.find((dummydata: DummyData) => dummydata.account === params.detailId);
    setInfo(data || null);
    console.log(data);  
    console.log(params);
  }, [dummyDatas, params.detailId]);

  if (!info) {
    
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <table>
        <tbody>
          <tr>
            <td>이름 :</td>
            <td>{info.name}</td>
          </tr>
          <tr>
            <td>계좌번호 :</td>
            <td>{info.account}</td>
          </tr>
          <tr>
            <td>건 수 :</td>
            {/* <td>{info.transactions}</td> */}
          </tr>
        </tbody>
      </table>
      <Link href="/">
        <button>홈으로 가기</button>
      </Link>
    </div>
  );
}

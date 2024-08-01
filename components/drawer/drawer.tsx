'use client'
import { banksMap } from "@/dummy/data";
import axi from "@/utils/customAxios";
import { Drawer, Tabs } from "@geist-ui/core";
import Image from "next/image";
import { useEffect, useState } from "react";

export function BottomDrawer({isVisible, setVisible, setBankAndAccount}:{isVisible:boolean, setVisible:Function, setBankAndAccount:Function}): JSX.Element {
  const [recents,setRecent] = useState<Map<any,any>[]>([]);  // 최근
  const [oftens,setOften] = useState<Map<any,any>[]>([]);    // 자주
  
  const onClick = (bankCode:number, accountNumber:string):void => {
    setBankAndAccount(bankCode, accountNumber);
    setVisible(false);
  }
  // 마운트될 때 정보 가져옴
  useEffect(() => {
    axi.get('/account/recent')
    .then((res) => {
      setRecent(res.data);
    })
    axi.get('/account/often')
    .then((res) => {
      setOften(res.data);
    })
  },[])

  return (
    <>
      <Drawer visible={isVisible} onClose={() => {setVisible(false)}} placement="bottom" width={'48rem'} height={'24rem'} margin={'auto'}>
        <Drawer.Content>
        <Tabs initialValue="1">
            <Tabs.Item label="최근" value="1">
              <div className="w-full flex justify-evenly gap-4">
                <div className="w-28">
                  계좌번호
                </div>
                <div className="w-48">
                  은행/증권사명
                </div>
                <div className="w-24">
                  받으시는 분
                </div>
              </div>
              <hr className="mt-2 mb-1"/>
              {recents.map(
                (recent) => 
                  <>
                  <div onClick={() => onClick(recent.bankCode, recent.accountNumber)} key={recent.uid}>
                    <div className="w-full flex justify-evenly gap-4 hover:bg-gray-100">
                      <div className="w-28">
                        {recent.accountNumber}  
                      </div>
                      <div className="w-48 flex">
                      <Image src={banksMap.get(recent.bankCode).src} alt={`${banksMap.get(parseInt(recent.bankCode)).name} 로고`} width={1} height={1} quality={90} style={{
                        width: "1.5rem",
                        height: "1.5rem"
                      }}/>
                       <div>
                        {banksMap.get(parseInt(recent.bankCode)).name}
                       </div>
                      </div>
                      <div className="w-24">
                        {recent.userName}
                      </div>
                    </div>
                  </div>
                  <hr className="mt-2 mb-1"/>
                  </>
                )
              }
            </Tabs.Item>
            <Tabs.Item label="자주" value="2">
            <div className="w-full flex justify-evenly gap-4">
                <div className="w-28">
                  계좌번호
                </div>
                <div className="w-48">
                  은행/증권사명
                </div>
                <div className="w-24">
                  받으시는 분
                </div>
              </div>
              <hr className="mt-2 mb-1"/>
              {oftens.map(
                (often) => 
                  <>
                  <div onClick={() => onClick(often.bankCode, often.accountNumber)} key={often.uid}>
                    <div className="w-full flex justify-evenly gap-4 hover:bg-gray-100">
                      <div className="w-28">
                        {often.accountNumber}  
                      </div>
                      <div className="w-48 flex">
                      <Image src={banksMap.get(often.bankCode).src} alt={`${banksMap.get(parseInt(often.bankCode)).name} 로고`} width={1} height={1} quality={90} style={{
                        width: "1.5rem",
                        height: "1.5rem"
                      }}/>
                       <div>
                        {banksMap.get(parseInt(often.bankCode)).name}
                       </div>
                      </div>
                      <div className="w-24">
                        {often.userName}
                      </div>
                    </div>
                  </div>
                  <hr className="mt-2 mb-1"/>
                  </>
                )
              }
            </Tabs.Item>
          </Tabs>
        </Drawer.Content>
      </Drawer>
    </>
  );
}
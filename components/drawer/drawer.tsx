'use client'
import axi from "@/utils/customAxios";
import { Drawer, Tabs } from "@geist-ui/core";
import { useEffect, useState } from "react";

export function BottomDrawer({isVisible, setVisible, setBankAndAccount}:{isVisible:boolean, setVisible:Function, setBankAndAccount:Function}): JSX.Element {
  const [recents,setRecent] = useState<Map<any,any>[]>([]);  // 최근
  const [oftens,setOften] = useState<Map<any,any>[]>([]);    // 자주
  const [myAccounts,setMy] = useState<Map<any,any>[]>([]);  // 내 계좌들

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
              {recents.map((recent) => <div onClick={() => setBankAndAccount(recent.bankCode, recent.accountNumber)} key={recent.uid}>{recent.accountNumber} {recent.bankCode} {recent.userName}</div>)}
            </Tabs.Item>
            <Tabs.Item label="자주" value="2">
              {oftens.map((often) => <div onClick={() => setBankAndAccount(often.bankCode, often.accountNumber)} key={often.uid}>{often.accountNumber} {often.bankCode} {often.userName}</div>)}
            </Tabs.Item>
          </Tabs>
        </Drawer.Content>
      </Drawer>
    </>
  );
}
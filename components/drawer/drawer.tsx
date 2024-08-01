'use client'
import { Drawer, Tabs } from "@geist-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";

export function BottomDrawer({isVisible, setVisible, setBankAndAccount}:{isVisible:boolean, setVisible:Function, setBankAndAccount:Function}): JSX.Element {
  const [recents,setRecent] = useState<Map<any,any>[]>([]);  // 최근
  const [oftens,setOften] = useState<Map<any,any>[]>([]);    // 자주
  const [myAccounts,setMy] = useState<Map<any,any>[]>([]);  // 내 계좌들

  // 마운트될 때 정보 가져옴
  useEffect(() => {
    axios.get('http://localhost:3000/account/recent', {withCredentials: true})
    .then((res) => {
      setRecent(res.data);
    })
    axios.get('http://localhost:3000/account/often', {withCredentials: true})
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
              {recents.map((recent) => <div key={recent.uid}>{recent.accountNumber} {recent.bankCode} {recent.userName}</div>)}
            </Tabs.Item>
            <Tabs.Item label="자주" value="2">
              {oftens.map((often) => <div key={often.uid}>{often.accountNumber} {often.bankCode} {often.userName}</div>)}
            </Tabs.Item>
            <Tabs.Item label="내 계좌" value="3">
              내 계좌
            </Tabs.Item>
          </Tabs>
        </Drawer.Content>
      </Drawer>
    </>
  );
}
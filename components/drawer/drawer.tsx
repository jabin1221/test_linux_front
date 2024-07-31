'use client'
import { Drawer, Tabs } from "@geist-ui/core";
import { useEffect, useState } from "react";

export function BottomDrawer({isVisible, setVisible, setBankAndAccount}:{isVisible:boolean, setVisible:Function, setBankAndAccount:Function}): JSX.Element {
  const [recent,setRecent] = useState<Map<any,any>[]>([]);  // 최근
  const [often,setOften] = useState<Map<any,any>[]>([]);    // 자주
  const [myAccounts,setMy] = useState<Map<any,any>[]>([]);  // 내 계좌들

  // 마운트될 때 정보 가져옴
  useEffect(() => {

  },[])

  return (
    <>
      <Drawer visible={isVisible} onClose={() => {setVisible(false)}} placement="bottom" width={'48rem'} height={'24rem'} margin={'auto'}>
        <Drawer.Content>
        <Tabs initialValue="1">
            <Tabs.Item label="최근" value="1">
              최근
            </Tabs.Item>
            <Tabs.Item label="자주" value="2">
              자주
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
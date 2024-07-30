'use client'
import Input from "@/components/inputs";
import { useEffect, useState } from "react";

const TransferPage = ():JSX.Element => {
  
  const [amount, setAmount] = useState<string>("");
  const [account, setAccount] = useState<string>("");

  const changeAmount = (inputNum:string):void => {
    setAmount(inputNum);
  }

  const changeAccount = (input:string):void => {
    setAccount(input);
  }

  useEffect(() => {
    setAccount("");
    setAmount("");
  },[])

  return (
    <div>
      <Input id="amount" type="text" label="이체하실 금액을 입력해주세요." setInput={changeAmount}/>
      <div className="flex w-full">
        <div>선택박스</div>
        <div>
          
          <Input id="account" type="text" label="받으실 분의 계좌번호를 입력해주세요" setInput={changeAccount}/>        
        </div>
      </div>        
    </div>
  );
}

export default TransferPage;
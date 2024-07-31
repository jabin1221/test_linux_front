'use client'
import { BottomDrawer } from "@/components/drawer/drawer";
import Input from "@/components/inputs/inputs";
import SubmitButton from "@/components/submitbutton/SubmitButton";
import { themeColor } from "@/styles/color";
import { notoSansKr } from "@/styles/fonts";
import { useState } from "react";

const TransferPage = ():JSX.Element => {
  
  const [amount, setAmount] = useState<string>("");     // 금액
  const [bank, setBanck] = useState<number>(0);         // 은행 코드
  const [account, setAccount] = useState<string>("");   // 보낼 계좌번호
  const [description, setDesc] = useState<string>("");  // 받는 사람 통장
  const [memo, setMemo] = useState<string>("");         // 내 통장 표기

  const [isVisible, setVisible] = useState<boolean>(false);

  // const changeAmount = (inputNum:string):void => {
  //   setAmount(inputNum);
  // }

  // const changeAccount = (input:string):void => {
  //   setAccount(input);
  // }

  const submit = async (data:any) => {
    console.log(data);
  }

  const cheat = async (data:any) => {
    console.log(data);
  }


  return (
      <div className={`${notoSansKr.className} content-container`}>
        <header className="w-full h-24">
          <div className="h-full flex justify-center items-center">
            <div className="text-4xl pl-3">송금하기</div>
          </div>
        </header>
        <div className="form-container w-full h-[28rem] flex justify-center">
          <div className="form-box border-2 w-2/3 min-w-[363px]  md:w-[512px] h-full border-gray-300 rounded-2xl p-6">
            <form className="h-full flex flex-col justify-around">
              <div className="inputs-container flex flex-col gap-4">
                {/* 금액 입력 */}
                <div>
                  <Input id="amount" type="number" label="이체하실 금액을 입력해주세요" setInput={setAmount}/>
                </div>
                {/* 은행/증권사 선택, 계좌번호 입력 */}
                <div>
                  <div className="text-xs text-right pr-1 mb-1" onClick={() => {setVisible(true)}}>⌚최근/자주/내계좌</div>
                  <div className="flex w-full gap-1">
                    <div className="w-24">선택박스</div>
                    <div className="w-full">
                      <Input id="account" type="number" label="받으실 분의 계좌번호를 입력해주세요" setInput={setAccount}/>        
                    </div>
                    <SubmitButton color={themeColor} callback={cheat} data={{bank, account}} message="사기조회" width="6rem"/>
                  </div>
                </div>
                {/* 받는 분 통장 표기 */}
                <div>
                  <Input id="amount" type="text" label="받는 통장 표기" setInput={setDesc}/>
                </div>
                {/* 내 통장 표기 */}  
                <div>
                  <Input id="amount" type="text" label="내 통장 표기" setInput={setMemo}/>
                </div>
              </div>
              <div className="button-container w-full flex justify-center">
                <SubmitButton color={themeColor} callback={submit} data={{amount, bank, account, description, memo}} message="보내기" width="66.666666%"/>
              </div>   
            </form>
          </div>
        </div>
        <BottomDrawer isVisible={isVisible} setVisible={setVisible}/>
      </div>
  );
}

export default TransferPage;
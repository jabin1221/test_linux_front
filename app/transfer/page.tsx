'use client'
import BankSelect from "@/components/bank/bankselect";
import { banks } from "@/components/bank/dummy_data";
import { BottomDrawer } from "@/components/drawer/drawer";
import Input from "@/components/inputs/inputs";
import ConfirmModal from "@/components/modal/confirmModal";
import SubmitButton from "@/components/submitbutton/SubmitButton";
import { themeColor } from "@/styles/color";
import { notoSansKr } from "@/styles/fonts";
import axi from "@/utils/customAxios";
import { cutname } from "@/utils/cutname";
import { transformUnit } from "@/utils/transformunit";
import { useEffect, useState } from "react";

const TransferPage = ():JSX.Element => {
  
  const [amount, setAmount] = useState<string>("");     // 금액
  const [bank, setBank] = useState<number>(0);         // 은행 코드
  const [account, setAccount] = useState<string>("");   // 보낼 계좌번호
  const [description, setDesc] = useState<string>("");  // 받는 사람 통장
  const [memo, setMemo] = useState<string>("");         // 내 통장 표기

  const [bankName, setName] = useState<string>("기관선택");
  
  const [buttonMessage, setMessage] = useState<string>("사기조회");
  const [buttonColor, setColor] = useState<string>(themeColor);
  const [displaValue, setDisplay] = useState<string>("");
  const [isFraud, setFraud] = useState<boolean>(false);

  const [isVisible, setVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [isConfirmed, setConfirm] = useState<boolean>(false);

  const setBankAndAccount = (bank: number, account: string) => {
    setBank(bank);
    setAccount(account);
  }

  useEffect(() => {
    setMessage("사기조회");
    setFraud(false);
    setConfirm(false);
  },[account])

  useEffect(() => {
    setDisplay(transformUnit(amount));
  },[amount])

  useEffect(() => {
    cutname(bank, setName);
  },[bank])

  const submit = async (data:any) => {
    if (!isConfirmed) {
      window.alert("사기계좌 여부를 확인해주시길 바랍니다.");
      return
    }

    if (!bank || !account || !amount) {
      window.alert("필수적인 정보를 모두 입력해주시기 바랍니다.");
      return
    }
    setModalVisible(true);
  }

  const cheat = async (data:any) => {
    let response:any;
    await axi.post('/account/cheat', {bank, account}).then((res) => {
      response=res;
      return
    });
    if (response.data.result === true) {
      setMessage("사기꾼");
    }
    else {
      setMessage("안전");
    }
    setConfirm(true);
    setFraud(response.data.result);
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
                <div className="flex">
                  <Input id="amount" type="number" label="이체하실 금액을 입력해주세요" setInput={setAmount} value={displaValue}/>
                  <div className="h-full flex flex-col justify-end text-xl ml-2">
                    원
                  </div>
                </div>
                {/* 은행/증권사 선택, 계좌번호 입력 */}
                <div>
                  <div className="text-xs text-right pr-1 mb-1" onClick={() => {setVisible(true)}}>⌚최근/자주/내계좌</div>
                  <div className="flex w-full gap-1">
                    <div className="w-24">
                      <BankSelect bankName={bankName} setBank={setBank}/>
                    </div>
                    <div className="w-full">
                      <Input id="account" type="number" label="받으실 분의 계좌번호를 입력해주세요" setInput={setAccount} value={account}/>        
                    </div>
                    <SubmitButton color={buttonColor} callback={cheat} data={{bank, account}} message={buttonMessage} width="6rem"/>
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
                <SubmitButton color={buttonColor} callback={submit} data={{amount, bank, account, description, memo}} message="보내기" width="66.666666%"/>
              </div>   
            </form>
          </div>
        </div>
        <BottomDrawer isVisible={isVisible} setVisible={setVisible} setBankAndAccount={setBankAndAccount}/>
        <ConfirmModal isVisible={modalVisible} setVisible={setModalVisible} isFraud={isFraud} amount={amount} bankName={bankName} account={account} display={displaValue}></ConfirmModal>
      </div>
  );
}

export default TransferPage;
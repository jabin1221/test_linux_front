'use client'
import BankSelect from "@/components/bank/bankselect";
import Input from "@/components/inputs/inputs";
import CheckModal from "@/components/modal/checkModal";
import SubmitButton from "@/components/submitbutton/SubmitButton";
import { themeColor } from "@/styles/color";
import { notoSansKr } from "@/styles/fonts";
import axi from "@/utils/customAxios";
import { cutname } from "@/utils/cutname";
import { useEffect, useState } from "react";

const CheckHistory = () => {

  const [account, setAccount] = useState<string>("");   // 보낼 계좌번호
  const [bank, setBank] = useState<number>(0);              // 은행 코드
  const [bankName, setName] = useState<string>("기관선택"); // 은행 이름
  const [isVisible, setVisible] = useState<boolean>(false);
  const [info, setInfo] = useState<Object>({
    case: 0,
    total: 0,
  })

  useEffect(() => {
    cutname(bank, setName);
  },[bank])

  const cheat = async (data:any) => {
    await axi.post('/account/cheat', data).then((res) => {
      if(res.data.result === true) {
        setInfo(res.data.info);
      } else {
        setInfo({
          case: 0,
          total: 0,
        })
      }
      setVisible(true);
    });
  }

  return (
    <div className={`${notoSansKr.className} content-container`}>
        <header className="w-full h-24">
          <div className="h-full flex justify-center items-center">
            <div className="text-4xl pl-3">이력 조회하기</div>
          </div>
        </header>
        <div className="form-container w-full h-[28rem] flex justify-center">
          <div className="form-box border-2 w-2/3 min-w-[363px]  md:w-[512px] h-full border-gray-300 rounded-2xl p-6">
            <form className="h-full flex flex-col justify-around">
              <div className="inputs-container flex flex-col gap-4">
                {/* 계좌 */}
                <BankSelect bankName={bankName} setBank={setBank}/>
                <Input id="account" type="number" label="조회하실 계좌번호를 입력해주세요" setInput={setAccount} value={account}/>
              </div>
              <div className="button-container w-full flex justify-center">
                <SubmitButton color={themeColor} callback={cheat} data={{bank, account}} message="조사하기" width="66.666666%"/>
              </div>   
            </form>
          </div>
        </div>
      <CheckModal state={isVisible} setState={setVisible} info={info}/>
      </div>
  );
}

export default CheckHistory;
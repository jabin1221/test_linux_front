'use client';

import { useState } from 'react';
import { usedummyData, DummyData } from '../../dummyDatas';
import Link from 'next/link';

export default function AddPage() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [result, setResult] = useState('');
    const dummyDatas = usedummyData(state => state.dummyDatas);
    const setdummyDatas = usedummyData(state => state.setdummyDatas);
    const [bank, setBank] = useState('default');
    const [amount, setAmount] = useState(0);

    const AddAccount = () => {
        if (bank !== 'default' && name !== '' && phoneNumber !== '') {
            const duplication = dummyDatas.find(data => data.account == phoneNumber);
            const data_info: DummyData = { name: name, account: phoneNumber, bank: bank, amount: amount, count: 1 };
            if(duplication){
              
            }
            setdummyDatas(name, phoneNumber, bank, amount);
            console.log(data_info);
            setResult(`${data_info.name}을 등록했습니다.`);
            setName('');
            setPhoneNumber('');
            setBank('default');
            setAmount(0);
        } else {
            alert('빈칸을 채워주세요!');
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h1>피해사례 등록</h1>
            <p>피해사례 등록이 완료되면 피해자를 위한 기능이 실시간 제공됩니다.</p>
            <br />
            <h2>용의자(사기범) 정보 </h2>
            <select onChange={(e) => setBank(e.target.value)} value={bank}>
                <option value="default" defaultValue={"default"}>은행 선택</option>
                <option value="woori_bank">우리은행</option>
                <option value="kookmin_bank">국민은행</option>
                <option value="IBK_bank">기업은행</option>
                <option value="shinhan_bank">신한은행</option>
                <option value="k_bank">케이뱅크</option>
                <option value="toss_bank">토스뱅크</option>
            </select>
            <br />
            <table>
                <tr>
                    <td>이름 : </td>
                    <td>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="계좌 명의자명을 입력하세요."
                            style={{ padding: '10px', marginBottom: '10px', width: '300px' }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>계좌 번호 : </td>
                    <td>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="계좌번호를 입력하세요."
                            style={{ padding: '10px', marginBottom: '20px', width: '300px' }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>피해 금액 : </td>
                    <td>
                        <input
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            placeholder="피해 금액을 적어주세요."
                            style={{ padding: '10px', marginBottom: '20px', width: '300px' }}
                        />
                    </td>
                </tr>
            </table>
            <button onClick={AddAccount} style={{ padding: '10px', width: '150px' }}>등록하기</button>
            {result && <p style={{ marginTop: '20px' }}>{result}</p>}
        </div>
    );
}

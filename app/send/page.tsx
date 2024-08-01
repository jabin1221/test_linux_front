'use client'

import { useEffect, useState } from 'react';
import {usedummyData, DummyData} from '../dummyDatas'
import List from './list';

const friend_info = [
    {
        name : "David",
        account : "1242141242121214"
    },
    {
        name : "Bob",
        account : "22222222"
    },
    {
        name : "Alice",
        account : "333333333"
    },
    {
        name : "Ken",
        account : "444444444"
    },
    {
        name: "Jabin",
        account: "010-0000-0000"
    }


]

export default function Page() {

    const dummyDatas = usedummyData(state => state.dummyDatas);
    const [result, setResult] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [check, setCheck] = useState(0);

    useEffect(() => {
        if(result != '해당 번호의 사기꾼이 없습니다.' && result != ''){
            alert(result);
        }
        
    }, [check]);

    const checkAccount = (number : String) => {
        const data = dummyDatas.find((dummydata: DummyData) => dummydata.account === number);
        setCheck(check + 1);
        if (data) {
            setResult(`해당 번호의 주인은 ${data.name}(이)라는 사기꾼입니다.`);
        } else {
            setResult('해당 번호의 사기꾼이 없습니다.');
        }
    };


    return(
        <div>
            <div>
            <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="직접 입력"
                style={{ padding: '10px', marginBottom: '20px', width: '300px' }}
            />
            <button onClick={() => checkAccount(accountNumber)} style={{ padding: '10px', width: '150px' }}>송금하기</button>
            </div>
            <div>
            <ul>
            {friend_info.map((friend, idx) => <li><List data={friend} checkAccount={checkAccount}/></li>)}

            </ul>   
            </div>
        </div>
    );
}
'use client'

import { useState } from 'react';
import {usedummyData, DummyData} from '../dummyDatas'
import axios from 'axios';
import Link from 'next/link';

export default function SearchPage() {
    
    const url = 'https://api.thecheat.co.kr/api/v2/fraud/search'
    
    let json_data = 
        {
            "keyword_type": "account",
            "keyword": "12010123456",
        }
    

    

    const [accountNumber, setAccountNumber] = useState('');
    const [result, setResult] = useState('');
    const dummyDatas = usedummyData(state => state.dummyDatas);
    

    const checkPhoneNumber = async () => { // post 부분 지금은 하지 않음
        try {
          const response = await axios.post(url, { json_data });
           console.log(response.data);
        } catch (error) {
          console.error('Error checking phone number:', error);
          
        }
      };

    const checkAccount = () => {
        const data = dummyDatas.find((dummydata: DummyData) => dummydata.account === accountNumber);

        if (data) {
            setResult(`해당 번호의 주인은 ${data.name}(이)라는 사기꾼입니다.`);
            
        } else {
            setResult('해당 번호의 사기꾼이 없습니다.');
        }
    };

    return (
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h1>사기꾼 판별기</h1>
            <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="전화번호나 계좌번호를 입력하세요"
                style={{ padding: '10px', marginBottom: '20px', width: '300px' }}
            />
            <Link href={'/search/' + accountNumber}>
                <button onClick={checkAccount} style={{ padding: '10px', width: '150px' }}>Check</button>
            </Link>
            {/* <button onClick={checkPhoneNumber} style={{ padding: '10px', width: '150px' }}>Test</button> */}
            {result && <p style={{ marginTop: '20px' }}>{result}</p>}
        </div>
        
    );
}
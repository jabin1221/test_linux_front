import create from 'zustand';

export interface DummyData {
    name: string;
    account: string;
    bank: string;
    amount: number;
    count: number;
}

interface DummyDataState {
    dummyDatas: DummyData[];
    setdummyDatas: (name: string, account: string, bank: string, amount: number) => void;
    removeDatas : (account: string) => void;
}

export const Change_Bank_Info = (bank : string) => {
    if(bank === 'woori_bank'){
        return "우리 은행"
    }
    else if(bank === 'kookmin_bank'){
        return "국민 은행"
    }
    else if(bank === 'IBK_bank'){
        return "기업 은행"
    }
    else if(bank === 'shinhan_bank'){
        return "신한 은행"
    }
    else if(bank === 'k_bank'){
        return "케이 뱅크"
    }
    else if(bank === 'toss_bank'){
        return "토스 뱅크"
    }
    else{
        return "default"
    }
}

export const usedummyData = create<DummyDataState>(set => ({
    dummyDatas: [
        { name: "Jabin", account: "010-0000-0000", bank: "woori_bank", amount: 50000, count: 5 },
        { name: "Kim", account: "999999999", bank: "k_bank", amount: 50000, count: 5 }
    ],
    setdummyDatas: (name: string, account: string, bank: string, amount: number) => set(state => {
        const existingData = state.dummyDatas.find(data => data.name === name && data.account === account && data.bank === bank);
        if (existingData) {
            return {
                dummyDatas: state.dummyDatas.map(data => 
                    data.name === name && data.account === account && data.bank === bank
                        ? { ...data, amount: data.amount + amount, count: data.count + 1 }
                        : data
                )
            };
        } else {
            const newDummyData = { name, account, bank, amount, count: 1 };
            return {
                dummyDatas: [...state.dummyDatas, newDummyData]
            };
        }
    }),
    removeDatas: (account: string) => set(state => {
        return {dummyDatas : state.dummyDatas.filter(data => data.account === account)};
    }),
    
}));
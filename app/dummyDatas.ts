import create from 'zustand';

export interface DummyData {
    name: string;
    account: string;
}

interface DummyDataState {
    dummyDatas: DummyData[];
    setdummyDatas: (newData: DummyData) => void;
}

export const usedummyData = create<DummyDataState>(set => ({
    dummyDatas: [
        { name: "Jabin", account: "010-0000-0000" },
        { name: "Kim", account: "999999999"}
        
    ],
    setdummyDatas: (newData: DummyData) => set(state => ({
        dummyDatas: [...state.dummyDatas, newData]
    }))
}));


'use client'

interface FriendDataInfo {
    data : friend_info;
    checkAccount : Function;
}

interface friend_info {
    name : string,
    account : string
}

 const List : React.FC<FriendDataInfo> = ({data, checkAccount}) => {

    return (
        <div>
            <div>
                <p>이름 : {data.name}</p>
                <p>계좌 : {data.account}</p>
            </div>
            <div>
                <button onClick={() => checkAccount(data.account)} style={{ padding: '10px', width: '150px' }}>송금하기</button>
            </div>
        </div>
    );
}


export default List;

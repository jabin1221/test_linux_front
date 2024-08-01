import axios, { AxiosInstance, AxiosResponse } from "axios";

class Axios {
    private static instance: AxiosInstance;

    private constructor() {}

    public static getInstance():AxiosInstance {
        // axios 인스턴스 생성
        Axios.instance = axios.create({
            baseURL: 'http://localhost:3000',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        return Axios.instance;
    }
    

    public get(url:string) {
        return Axios.instance.get(
            url
        )
    }

    public post(url:string, data:any) {
        return Axios.instance.post(
            url,
            data
        )
    }

    public put(url:string, data:any) {
        return Axios.instance.put(
            url,
            data
        )
    }

    public delete(url:string) {
        return Axios.instance.delete(
            url
        )
    }
}

const axi = Axios.getInstance();
export default axi;
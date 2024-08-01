import { notoSansKr } from "@/styles/fonts";
import Link from "next/link";

const RootRouter = () => {
  return (
    <div className={`w-96 h-full flex justify-around items-center ${notoSansKr.className}`}>
        <Link href={'/transfer'}>
          <div className="w-28 h-12 bg-orange-400 text-white font-bold rounded-2xl hover:animate-pulse hover:bg-orange-600 text-center flex justify-center items-center">
            <p>송금하기</p>
          </div>
        </Link>
        <Link href={'/checkhistory'}>
          <div className="w-28 h-12 bg-red-300 text-white font-bold rounded-2xl hover:animate-pulse flex hover:bg-red-700 justify-center items-center">
            <p>직접 조회하기</p>
          </div>
        </Link>
    </div>
  );
}

export default RootRouter;
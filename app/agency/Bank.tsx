import Image from "next/image";
// import "./Bank.css";
const Bank = ({ src, name, onClick }) => {
  return (
    <button
      className="flex p-3  items-center border text-xl w-52 bank_img  hover:bg-orange-300"
      value={name}
      onClick={onClick}
    >
      {/* <span
        className={`bank_logo bg-[url('/images/은행사-로고.jpg')] w-9  h-11 bg-no-repeat bg-[length:200px_556px] bg-[position:${x}_${y}]`}
      ></span> */}
      <Image src={src} width={30} height={30} alt={name}></Image>
      {name}
    </button>
  );
};

export default Bank;

import Image from "next/image";
const Securities = ({ src, name, onClick }) => {
  return (
    <button
      className="flex p-3  items-center border text-xl w-52 bank_img  hover:bg-orange-300"
      value={name}
      onClick={onClick}
    >
      <Image src={src} width={30} height={30} alt={name}></Image>
      {name}
    </button>
  );
};

export default Securities;

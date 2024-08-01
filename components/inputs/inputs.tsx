'use client'
import { useEffect, useState } from 'react'
import './inputs.css'

// <Input type={'text'} label={'outlined floating label'}/>
const Input = ({id, type, label, value, setInput}:{id:string, type:string, label:string, value?:string, setInput:(inputNum:string)=>void}):JSX.Element => {
  // input type="number" 버그 방지
  const inputType:string = type === "text"||"number" ? "text" : type

  const [inputValue,setVal] = useState<string>(value ? value : "");
  // setter 실행 함수
  const changeInput = (event:React.ChangeEvent<HTMLInputElement>):void => {
    if (event) {
      // number 타입의 input이면 숫자만 입력되도록 정규식으로 필터링
      if (type === "number") {
        setVal(event.target.value.replace(/[^0-9]/g,''));
        setInput(event.target.value.replace(/[^0-9]/g,''));
      }
      else {
        setVal(event.target.value);
        setInput(event.target.value);
      }
    }
  }

  return (
    <div className="relative grow">
      <input type={inputType}
      id={id} 
      className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-600 focus:ring-0 focus:border-blue-600 peer" 
      onChange={changeInput}
      autoComplete="off"
      placeholder=" " 
      value={value}
      />
      <label htmlFor={id}className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{label}</label>
    </div>
  )
}

export default Input;
import { useEffect, useState } from "react"
import SpinBox from "./SpinBox";


// <SubmitButton color={'rgb(51,51,255)'} callback={testFunction} message={'로그인'} />
const SubmitButton = ({color, callback, data, message, width}: {color:string, callback:Function, data:any, message:string|undefined, width?:string}):JSX.Element => {
  // 색
  const sub = color.slice(4, -1);
  const [red, green, blue] = sub.split(",").map(Number);
  const hoveredColor = `rgb(${Math.floor(red/1.2)},${Math.floor(green/1.2)},${Math.floor(blue/1.2)})`
  const mouseDownColor = `rgb(${Math.floor(red/2)},${Math.floor(green/2)},${Math.floor(blue/2)})`

  // 메세지
  const buttonMessage:string = message? message : "SUBMIT";

  // 함수 실행되기 전 버튼을 비활성화하기 위한 변수
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isHovered, setHover] = useState<boolean>(false);
  const [buttonColor, setColor] = useState<string>(color);

  const buttonWidth:string = width? width : '100%'
  const height:string = '3rem';

  // 클릭 시 실행될 함수
  const onClick = async (event:React.MouseEvent<HTMLElement, MouseEvent>):Promise<void> => {
    event.preventDefault();
    setDisabled(true);
    if (data) {
      await callback(data);
    }
    else {
      await callback();
    }
    setDisabled(false);
  }

  useEffect(():void => {
    if (isHovered === false) {
      setColor(color);
    }
    else{
      setColor(hoveredColor);
    }
  },[isHovered])

  return (
    <div className='button-container' style={{width: buttonWidth, height: height}}>
      <button id='submit-button' 
      className="border-transparent rounded-xl disabled:opacity-50 relative text-white w-full h-full" 
      style={{backgroundColor: buttonColor, 
              fontWeight: message ? message.length<=3 ? "bold" : "normal" : "normal", 
              fontSize: message ? message.length<=3 ? "1.25rem" : "1rem" : "1rem"
            }}
      onClick={onClick} 
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onMouseDown={() => setColor(mouseDownColor)} onMouseUp={() => setColor(color)}
      disabled={disabled}>
        {
          disabled?
          <SpinBox color={buttonColor}/>
          : buttonMessage
        }
      </button>
    </div>
  )
}

export default SubmitButton
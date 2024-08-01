const SpinBox = ({color}:{color:string}):JSX.Element => {

  return (
    <div id="donut" className="flex justify-center items-center w-8 h-8 rounded-2xl bg-gradient-to-tr from-yellow-300 via-orange-400 to-pink-500 animate-spin m-auto" style={{backgroundColor:color}}>
      <div id="hole" className="w-4 h-4 rounded-2xl m-auto" style={{backgroundColor:color}}></div>
    </div>
  )
}

export default SpinBox
import { banks } from "@/components/bank/dummy_data";


export const cutname = (bank: number, setName: Function) => {
  for (let i=0; i<banks.length; i++) {
    if (banks[i].id == bank) {
      let display = banks[i].name;
      if (display.length >= 5) {
        if (display.includes("뱅크")) {
          display = display.replace("뱅크","");
        }
        else if (display.includes("은행")) {
          display = display.replace("은행", "");
        }
        else if (display.includes("증권")) {
          display = display.replace("증권", "");
        }
        else if (display.includes("투자")) {
          display = display.replace("투자", "");
        }
      }
      setName(display);
      break
    }
  } 
}
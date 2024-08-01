export const transformUnit = (money:string):string => {
  let num:number = parseInt(money);
  let strNum = "";
  while (num) {
    if (num>=10000000000000000) {
      strNum +=`${Math.floor(num/10000000000000000)}경`
      num = num%10000000000000000;
    }
    else if (num>=1000000000000) {
      strNum +=`${Math.floor(num/1000000000000)}조`
      num = num%1000000000000;
    }
    else if (num>=100000000) {
      strNum +=`${Math.floor(num/100000000)}억`
      num = num%100000000;
    }
    else if (num>=10000) {
      strNum +=`${Math.floor(num/10000)}만`
      num = num%10000;
    }
    else {
      strNum += `${num}`
      break
    } 
  }

  return strNum
}
//2. Տեղերով փոխել տրված թվի առաջին և վերջին թվանշանները: Օրինակ` 8547-ից պետք է ստացվի 7548:

let num = 34518789;
let strNum = String(num);
let firstD = strNum[0];
let lastD = strNum[strNum.length - 1];
let s = Math.pow(10, strNum.length - 1);

num -= Number(firstD) * s;
num += Number(lastD) * s;
num -= Number(lastD);
num += Number(firstD);

console.log(num);

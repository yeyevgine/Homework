//4. Տրված է բնական թիվ: Տպել “YES”, եթե 
//a. թվի թվանշանների մեջ կա 3 թվանշան,
//b. թվի թվանշանների մեջ չկա 5 թվանշան,
//c. թվի թվանշանները աճման կարգով են դասավորված

//4a
/*let num = 146345678;
let strNum = String(num);

for (let i = 0; i < strNum.length; i++) {
 if (strNum[i] === "3") {
    console.log("yes");
    break;
  }
}*/

//4b
let num = 18878890;
let strNum = String(num);

let i = 0;
while(i < strNum.length) {
 if (strNum[i] !== "5") {
     i++;
  } 
}
console.log("yes");

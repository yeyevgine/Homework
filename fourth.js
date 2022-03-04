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
/*let num = 9876;
let strNum = String(num);
let s = true;
for (let i = 0; i < strNum.length; i++) {	
		if(strNum[i] === "5"){
    	s = false;
    }
}
if(s){
 console.log("yes");
}*/

//4c
let num = 8765489;
let strNum = String(num);
let x = true;
for (let i = 0; i < strNum.length; i++) {	
		if(strNum[i] >= strNum[i+1]){
    	x = false;
    }
}
if(x){
 console.log("yes");
}



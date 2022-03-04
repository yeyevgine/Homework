//1. Տրված N բնական թվի համար հաշվել այդ թվի ֆակտորիալը  N! = 1 * 2 * …* N 
/*if (num == 0) {
   return 1;
 } else if (num < 0) {
   return 0
 }
 return (num * fac(num - 1));*/

function fac(num) {

  return (num == 0) ? 1 : (num < 0) ? 0 : (num * fac(num - 1));
  
}
console.log(fac(1));



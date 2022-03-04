//3. Գրել ծրագիր, որը էկրանին տպում է 1-10 թվերի բազմապատկման աղյուսակը։

for (let y = 1; y <= 10; y++) {
  
  let num = y; 
  for (let i = 1; i <= 10; i++) {

    let result = i * num;
    console.log(`${num} * ${i } = ${result}`);
  }
}



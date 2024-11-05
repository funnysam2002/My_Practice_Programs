// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(2,4,6));


const totalScore = arr => {
    let sum1=0;
    for(mark of arr){
      sum1+=mark;
    }
    return sum1;
}

const Score = [1,2,3,4,5];

totalScore(Score);

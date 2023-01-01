//Problem 4: Print the average of even numbers from 1 to 100 (both included)
let count_number =0
let sum=0;
for(let i=1;i<=100;i++){
  if(i%2==0){
    sum=sum+i;
    count_number++
  }
}
console.log(sum/count_number);
const temp = [23, 64, 34, 87, -35, 75];

function getPositive(numbers){
const positiveNumber = [];

for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element > 0){
        positiveNumber.push(element);
    }
    else{
        break;
    }
}
return positiveNumber;
}

const myPositiveNumber = getPositive(temp);
console.log(myPositiveNumber);
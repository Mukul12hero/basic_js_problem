const age = [23, 54, 22, 56, 86, 55];
let largest = age[0];

function getLargest(arr){
    for(let i = 0; i < age.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

const myLargest = getLargest(age);
console.log(myLargest);
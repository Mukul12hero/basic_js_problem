const friends = ['kamal', 'raju', 'rasel khan', 'nazim uddin', 'ruhul amin'];

let bestFriends = friends[0];

function findBestFriends(arrayName){
    for(let i = 0; i < arrayName.length; i++){
        if(arrayName[i].length > bestFriends.length){
            bestFriends = arrayName[i];
        }
    }
    return bestFriends;
}

const myBestFriends = findBestFriends(friends);
console.log(myBestFriends);



// METHOD TWO

// const friends = ['kamal', 'raju', 'rasel khan', 'nazim uddin', 'Md ruhul amin'];

// let bestFriends = '';
// let charCount = 0;

// function findBestFriends(arrayName){
//     for(let i = 0; i < arrayName.length; i++){
//         if(arrayName[i].length > charCount){
//             bestFriends = arrayName[i];
//             charCount = arrayName[i].length;
//         }
//     }
//     return bestFriends;
// }

// const myBestFriends = findBestFriends(friends);
// console.log(myBestFriends);






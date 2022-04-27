// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Function accept arr. Checking card number and return 'true' or 'false'.

function validateCred(arr){
    arr.reverse();//reversing arr
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
       if(i % 2 === 0){
           sum += arr[i];
       }else{
        if(arr[i]*2 > 9){
            sum += arr[i]*2 - 9;
        }else{   
            sum += arr[i]*2;
       }
    }
}
arr.reverse();//reversing arr back
if (sum % 10 === 0){
    return true;
}else{
    return false;
}
};


/*Function taking nested array of credit card numbers. Logging invalid cards and return array of invalid cards*/

function findInvalidCards(arr){
    let invalid = [];
    for (let elem of arr){
        if(!validateCred(elem)){
            invalid.push(elem);
            console.log(`Card #: ${elem.join('')} ...is invalid`);
        }
    }
    return invalid;
}


/*Function checking companies which provide incorrect cards*/

function idInvalidCardCompanies(arr){
    let listOfCompanies = [];
    //Iterating through arr of invalid cards
    for(let elem of arr){
     if (elem[0] === 3){
         //If arr includes that name - it will not be added anymore
        if(!listOfCompanies.includes('Amex')){ 
        listOfCompanies.push('Amex');
        }
     }else if (elem[0] === 4){
         if(!listOfCompanies.includes('Visa')){
         listOfCompanies.push('Visa');
         }
     }else if (elem[0] === 5){
         if(!listOfCompanies.includes('Mastercard')){
         listOfCompanies.push('Mastercard');
         }
     }else if (elem[0] === 6){
         if(!listOfCompanies.includes('Discover')){
         listOfCompanies.push('Discover');
         }
     }else{
         listOfCompanies.push('Company not found');
     }
 }
 console.log('Companies which produce incorrect cards:')
 return listOfCompanies;
}

console.log(idInvalidCardCompanies(findInvalidCards(batch)));

//TASK 7 - Function transform string into array of digits
function stringToArr(string){
    let arr = [];
    for(let char of string){
        arr.push(+char);
    }
    return arr;
}

//TASK 7 (2)  Function that will convert invalid numbers into valid numbers.
function invalidToValid(arr){
    arr.reverse();
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
       if(i % 2 === 0){
           sum += arr[i];
       }else{
        if(arr[i]*2 > 9){
            sum += arr[i]*2 - 9;
        }else{   
            sum += arr[i]*2;
       }
    }
}
if (arr[0]>=sum%10){
    arr[0] -= sum%10;
}else{
    arr[0] += (10-sum%10);
}
return arr.reverse()
}




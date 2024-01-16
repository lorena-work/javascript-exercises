
const sumAll = function(intOne,intTwo) {
    let sum = 0;
    //works with larger number first
    if(intOne>intTwo){
        const placeholder= intOne;
        intOne = intTwo;
        intTwo = placeholder;
    }
   //returns ERROR with negative numbers
    if(intOne< 0 || intTwo <0){
        return "ERROR";
    }
    //returns ERROR with non-number parameters
    if(!Number.isInteger(intOne) || !Number.isInteger(intTwo)){
        return "ERROR";
    }
    //start at intOne then add every number up to intTwo
    //return sum of all numbers
    for(let i = intOne; i <= intTwo; i++){
        sum += i;
    }
    
return sum;
};
//console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;

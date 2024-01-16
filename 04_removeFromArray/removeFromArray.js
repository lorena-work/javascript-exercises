const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((element) => {
        if (!args.includes(element)){
            newArray.push(element);
        }
    });
    //pushes each element included in "array" into an array named "newArray" if the element is NOT included in args
    return newArray;
}

//console.log(removeFromArray([1,2,3,4],3));

// Do not edit below this line
module.exports = removeFromArray;

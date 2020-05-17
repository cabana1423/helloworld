function allLongestStrings(inputArray){
    var largestLength=inputArray[0].length;
    for(var i=1;i< inputArray.length;i++){
        if(largestLength < inputArray[i].length){
            largestLength=inputArray[i].length;
        }
    }
    inputArray=inputArray.filter((element)=>{
        return element.length === largestLength;
    });
    return inputArray;
}
var inputArray=["enyky", "benyky", "yely", "varennyky"];
console.log(allLongestStrings(inputArray));
function palindromeRearranging(inputString){
    var charArray =inputString.split("");

    var letterObject={};

    for(var i=0;i<charArray.length;i++){
        if(!letterObject.hasOwnProperty(charArray[i])){
            letterObject[charArray[i]]=1;
        }
        else{
            letterObject[charArray[i]]++;
        }
    }
    var addCount=0;
    for(val in letterObject){
        if(letterObject[val]%2!=0){
            addCount++;
        }
    }
    return addCount> 1 ? false : true;
}
var inputString1 = "aabb";
console.log(palindromeRearranging(inputString1));
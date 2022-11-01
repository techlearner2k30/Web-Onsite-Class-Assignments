const arr1 = [11,12,15,17,19,23,29,35];
var arr2 = [...arr1];
var cntSum = 0;
for(let i = 0; i < arr1.length; i++){
    var diff = (arr1[i] - arr1[i-1]);
    if( diff > 1 ){
        var newArray = [];
        for(let j = 1; j < diff; j++){
            newArray.push(arr1[i-1] + j);
        }
        arr2.splice(i + cntSum,0,...newArray);
        cntSum = cntSum + diff - 1; 
    }
}

console.log(arr2);
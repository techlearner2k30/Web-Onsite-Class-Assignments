class Test{
    name1;
    constructor(name1){
        this.name1 = name1;
    }
    cummSum(arr){
        if(typeof arr == "object" && arr.length > 1 ){
             const sum =  arr.reduce((prev,elem)=> prev + elem);
             return sum;
         }else{
             return "Valid Array objects please"
         }
     }
}

const obj1 = new Test("testing");
console.log(obj1.cummSum([10,25,9,58,96]));
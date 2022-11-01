let arr1 = [11, 15, 17, 18, 19];


Array.prototype.cummSum = function() {
   if(typeof this == "object" && this.length > 1 ){
        const sum =  this.reduce((prev,elem)=> prev + elem);
        return sum;
    }else{
        return "Valid Array objects please"
    }
}

console.log( arr1.cummSum() );


//if parrot not talking  -> parrot not in trouble -> return false
// else if - hour is less than 7 or-|| greater than 20 -> parrot is in trouble -> return true


var isTalking = false
var hour = 4
var isParrotInTouble = function (isTalking, hour){
if (isTalking === false){
    return false;

}
 else if (hour < 7 || hour > 20){
     return true;
     
 }
}

console.log(isParrotInTouble(isTalking, hour));
var posNeg = function(a, b, neg)
{
   //var answer = false;

    if(neg && a<0 && b<0)
    {
        return true;
    }
    if((a<0 && b>0)||(a>0 && b<0))
    {
        return true;
    }
   return false;
}





console.log(posNeg(1,2,true));
console.log(posNeg(-1,-2,true));
console.log(posNeg(1, -1, false));
console.log(posNeg(-1,1, false));
console.log(posNeg(-1,-1, false));
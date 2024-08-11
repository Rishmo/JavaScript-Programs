// a=[10,20,30,40];
// ans = a.every((el) => el % 10 == 0);

function getMin(n){
    min=n.reduce((min,el) =>{
        if(min<el)
            return min;
        else
            return el;
    });
    return min;
}

n=[1,3,2,4,5,-1];

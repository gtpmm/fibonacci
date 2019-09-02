'use strict';
function fib(n){
    if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }//else{
    //     return (n)=>{
    //         var test1=1;
    //         var test2=0;
            
    //         for(var i =0;i<n;i++){
    //             test2 = test1;
    //             test1 += test2;  
    //         }
    //     return test1; 
    //     }
    // }
    return fib(n-1)+fib(n-2);
}

const length = 40;
for(var i = 0;i<=length;i++){
    console.log(fib(i));
}

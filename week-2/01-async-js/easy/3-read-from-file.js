const fs=require('fs');

function callBackFn(err,data){
    if(err){
        console.error("Error in reading from file");
        return
    }
    else{
        console.log(data);
    }
}

fs.readFile('randomText.txt','utf-8',function(err,data){callBackFn(err,data)});

let a=0;
for(let i=0;i<100000000;i++)
{
    a+=1;
}
console.log(a);
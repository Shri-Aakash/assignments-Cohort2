setInterval(()=>{
    let date=new Date().toTimeString().slice(0,8);
    console.log(date);
},1000);

/*
setInterval(()=>{
    let date=new Date().toLocaleTimeString();
    console.log(date);
},1000);

*/
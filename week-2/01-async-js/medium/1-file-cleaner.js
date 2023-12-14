const fs=require('fs')

function removeExtraSpaces(string){
    let str=string.replace(/\s+/g,' ').trim()
    fs.writeFile('cleanedString.txt',str,(err)=>{
        if(err){console.error("Error when writing to file");}
    });
}

fs.readFile('fileCleaner.txt','utf-8',(err,data)=>{
    if(err){console.error("Error when reading file");return;}
    else{removeExtraSpaces(data);}
});
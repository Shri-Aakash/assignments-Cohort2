let i=0
function increaseCounter() {
    i++;
    console.log(i);
    setTimeout(increaseCounter,1000);
}

increaseCounter();
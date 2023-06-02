const display = document.getElementById('clock');
console.log(display)
function updateTime() {
    const date = new Date();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
console.log(hour)
console.log(minutes)
console.log(seconds)
    display.innerText=`${hour} : ${minutes} : ${seconds}`
}

function formatTime(time) {
    if ( time < 10 ) {
        return '0' = time
    }
    return time;
}

setInterval(updateTime, 1000);
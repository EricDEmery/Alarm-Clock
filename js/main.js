function updateTime() {
    const display = document.getElementById('clock');
    const date = new Date();
        /* For Test console.log(display)*/
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
        /* For Test console.log(hour)
        For Test console.log(minutes)
        For Test console.log(seconds)*/
    display.innerText=`${hour} : ${minutes} : ${seconds}`
}

function formatTime(time) {
    if ( time < 10 ) {
        return `0${time}`
    }
    return time;
}

setInterval(updateTime, 1000);
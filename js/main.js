function formatTime(time) {
    if ( time < 10 ) {
       /*console.log(`0${time}`)*/
        return `0${time}`
    }
    return time;
}

function updateTime() {
    const display = document.getElementById('clock');
    const date = new Date();
        /* For Test console.log(display)*/
    let hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
        /* For Test console.log(hour)
        For Test console.log(minutes)
        For Test console.log(seconds)*/
    /*formatTime(hour)*/
   /*console.log(hour)*/
         hour = formatTime(hour)
        let displayTime=`${hour} : ${minutes} : ${seconds}` 
        display.innerText= displayTime
}


setInterval(updateTime, 1000);
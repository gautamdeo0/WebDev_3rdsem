// while(true){
    function calc(countDownDateParam) {
        var check = new Boolean(true);
    var countDownDate = countDownDateParam.getTime()
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

    const daysArray = document.getElementsByClassName("days");
    const hrsArray =document.getElementsByClassName("hrs");
    const minsArray =document.getElementsByClassName("mins");
    const secsArray =document.getElementsByClassName("secs");
    
    // console.log(countDownDate.getDate()+1)
    // console.log(countDownDate.getDate())
    
    Array.prototype.forEach.call(daysArray, function(daysVal) {
        daysVal.innerHTML = days;
        check == false ? days += 2 : days+=1;
        check == false ? check = true : check=false;
    });
    Array.prototype.forEach.call(hrsArray, function(hrsVal) {
        hrsVal.innerHTML = hours;
        check == false ? hours += 11 : hours+=4;
        check == false ? check = true : check=false;
        hours = hours % 60
    });
    Array.prototype.forEach.call(minsArray, function(minsVal) {
        minsVal.innerHTML = minutes;
        check == false ? minutes += 7 : minutes+=4;
        check == false ? check = true : check=false;
        minutes %= 60
    });
    Array.prototype.forEach.call(secsArray, function(secsVal) {
        secsVal.innerHTML = seconds;
        check == false ? seconds += 5 : seconds+=4;
        check == false ? check = true : check=false;
        seconds%=60
    });
    
}

var x = setInterval(function () {
    // var countDownDate = new Date("Jan 19, 2023 00:00:00").getTime();
    var countDownDate1 = new Date("june 23, 2023 00:00:00");
    calc(countDownDate1)
    
}, 100);
// }
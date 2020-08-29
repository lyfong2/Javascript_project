let weekday2 = new Array(7);
weekday2[0] = "To to chillax!";
weekday2[1] = "Monday morning blues!";
weekday2[2] = "Taco Time!";
weekday2[3] = "Two more days to the weekend.";
weekday2[4] = "The weekend is almost here...";
weekday2[5] = "Weekend is here!";
weekday2[6] = "Time to party!";

window.onload = function() {

    whatDayIsIt();
    function whatDayIsIt(){
        var day_list = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var date = new Date().getDay()
        document.getElementById("weekday").innerHTML = day_list[date];
        document.getElementById("phrase").innerHTML = weekday2[date];
        
    };
}



// let clock = document.getElementById('clock');
// clock.innerText = clockTime;

// 1.取得今天日期
// 2.判斷今天星期幾
// 3.顯示星期幾



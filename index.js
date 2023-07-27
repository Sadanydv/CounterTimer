const daysElement=document.querySelector(".days");
const hoursElement=document.querySelector(".hours");
const minutesElement=document.querySelector(".minutes")
const secondsElement=document.querySelector(".seconds");
const counterTimer=document.querySelector(".counterTimer");

const second=1000,
minute=60*second,
hour=60*minute,
day=24*hour;

const TimerFunction = () =>{

    let now=new Date();
    let dd= String(now.getDate()).padStart(2,"0");
    let mm= String(now.getMonth() + 1 ).padStart(2,"0");
    let yyyy=now.getFullYear();
    const enterday=prompt("Enter Day").padStart(2,"0");
    const entermonth=prompt("Enter month").padStart(2,"0");
    let targetdate=`${entermonth}/${enterday}/${yyyy}`;



    now=`${mm}/${dd}/${yyyy}`;
    if(now > targetdate)
    {
        targetdate=`${entermonth}/${enterday}/${yyyy + 1}`;
    }
    console.log(targetdate);
    console.log(now);

    

    setInterval(()=> {

    const timer=new Date(targetdate).getTime();
    const today=new Date().getTime();
    const  difference=timer-today;
    const leftDay=Math.floor(difference/day);
    const leftHour=Math.floor((difference % day)/hour);
    const leftMinute=Math.floor((difference % hour)/minute);
    const leftSecond=Math.floor((difference % minute)/second);
    daysElement.innerText=leftDay;
    hoursElement.innerText=leftHour;
    minutesElement.innerText=leftMinute;
    secondsElement.innerText=leftSecond;
    console.log("Session ended Please login again")
    
    }, 0);
}

TimerFunction();

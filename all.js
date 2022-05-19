let second=document.querySelector('#second');
let hour=document.querySelector('#hour');
let minute=document.querySelector('#minute');
setInterval(updateTime,1000)
function updateTime(){
    var d=new Date();
    console.log(d)
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    console.log('h:'+h);
    console.log('m:'+m);
    console.log('s:'+s);

    var setHours= (change12Hr(h)*30+m*0.5-90);
    var setMinute=m*6+180;
    var setSecond=s*6+180;
    console.log(setHours);
    console.log(setMinute);
    console.log(setSecond);

    hour.setAttribute('style',"transform :rotate("+setHours+"deg)"+";")
    minute.setAttribute('style',"transform :rotate("+setMinute+"deg)"+";")
    second.setAttribute('style',"transform :rotate("+setSecond+"deg)"+";")
}

function change12Hr(hours){
    if(hours>12){
        hours-=12
    }
    else if(hours==0){
        hours=12
    }
    return hours;
}
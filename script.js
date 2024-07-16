function countDown(){
    setInterval(function(){
        let date=new Date("July 10 2024,10:00:00").getTime();
        let curr=new Date().getTime();
        let diff  =  curr-date;
        let day=Math.floor( diff / (1000*60*60*24));
        console.log(day);
        let  hr=Math.floor(diff % (1000*60*60*24)/(1000*60*60));
        console.log(hr);
        let  min=Math.floor(diff % (1000*60*60)/(1000*60));
        console.log(min);
        let  sec=Math.floor(diff % (1000*60)/(1000));
        console.log(sec);
        document.getElementById("day").innerHTML=day+"<br/>"+"Day";
        document.getElementById("hr").innerHTML=hr+"<br/>"+"Hour";
        document.getElementById("min").innerHTML=min+"<br/>"+"Min";
        document.getElementById("sec").innerHTML=sec+"<br/>"+"Sec";
    },1000)
}
countDown();
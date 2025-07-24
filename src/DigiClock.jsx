import { useEffect, useState } from "react";

function DigiClock(){
    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const intervalID=setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(intervalID);
        }

    },[]);

    function formattime(){
        const hours=time.getHours();
        const min=time.getMinutes();
        const sec=time.getSeconds();
        const meri=hours>=12?"PM":"AM";
        const hour=hours%12 || 12;

        return `${doubleDigit(hour)}:${doubleDigit(min)}:${doubleDigit(sec)} ${meri}`
    }

    function doubleDigit(num){
        return (num<10?"0":"")+num;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formattime()}</span>
            </div>
        </div>
    )
}

export default DigiClock
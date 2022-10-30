import {useState, useEffect} from 'react';

const useRWD=()=>{
    const [device,setDevice]=useState("sm");

    const handleRWD=()=>{
        if(window.innerWidth>=1400)
            setDevice("xxl");
        else if (window.innerWidth>=1200)
            setDevice("xl");
        else if (window.innerWidth>=992)
            setDevice("lg");
        else if (window.innerWidth>=768)
            setDevice("md");
        else
            setDevice("sm"); //576
    }

    useEffect(()=>{ 
        window.addEventListener('resize',handleRWD);
        handleRWD(); //第一次渲染即觸發
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    return device;
}

export default useRWD;
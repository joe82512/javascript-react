import { useState, useEffect, useRef } from 'react';

const useText = (id) => {
  const mounted = useRef();
  const [text, changeText] = useState(0);

  useEffect(() => {      
    if(!mounted.current){ //componentDidMount
      changeText(100);
      mounted.current=true;
    }
    else{ //componentDidUpdate
      document.getElementById(id).append(text); //增加文字
    }        
    return (() => { //componentWillUnmount
      document.getElementById(id).innerHTML=""; //刪除文字
    });
  }, [text,id]); // 變數被改變時觸發 useEffect

  return (()=>changeText(text+1))
}

export default useText;

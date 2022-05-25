import React,{useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './index.css';

const alanKey = 'b49f0d74731e75fc94d208a8043361b02e956eca572e1d8b807a3e2338fdd0dc/stage';

export const App = () => {
  
  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand:({command,articles}) => {
        if(command==='newHeadlines'){
          console.log(articles);
        }
      }
    })
  },[])

  return (
    <div>
        <h1> Alan AI News APP </h1>
    </div>
  )
}


export default App;
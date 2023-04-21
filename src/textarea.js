import React, { useState }from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Textarea({ countLimit }) {
const [textValue, setTextValue] = useState('');
const [store,setStore] = useState('')
// const [showText, setShowText] = useState(false);

function handleTextChange(event) {
    setTextValue(event.target.value);
   

    
  }

function handleSubmit(){
    setStore(textValue)
    // setShowText(true)
}

  const percentage = (textValue.length / countLimit) * 100;
  return (
    <>
    <div>
    <div style={{ width: '35px', height: '60px' , marginLeft:"5vw"}}>
   
    <textarea
      value={textValue}
      onChange={handleTextChange}
      maxLength={countLimit}
    />
     <CircularProgressbar
    style={{height:"10vh",width:"20vw"}}
      value={percentage}
      text={`${countLimit - textValue.length} characters remaining`}
    />
      <p style={{width:"12vw"}}>{countLimit - textValue.length} characters remaining</p>

      <button onClick={()=>handleSubmit()}> Submit  </button>
       <p>{store}</p>
      
  </div>
  </div>
  </>
  )
}

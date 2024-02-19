import React, { useState } from 'react'

export default function TextForm(props) {
    const[text,setText] =useState('Enter text here')
    const handleUpClick =()=>{
            let newWord= text.toUpperCase();
            setText(newWord);
    }
    const onChange =(e)=>{
        setText(e.target.value);
    }
  return (
    <>
  <div className="container my-3" >
    <h1 className='' style={{ color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
<div className="mb-3 my3">
  <textarea style={{backgroundColor: props.mode==='dark'?'white':'black', color:props.mode==='dark'?'black':'white'}} className="form-control"  value={text} onChange={onChange} id="exampleFormControlTextarea1" rows="13"></textarea>
</div>
<button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to Uppercase</button>
<button className="btn btn-primary mx-1">Convert to LowerCase</button>
<button className="btn btn-primary mx-1">Copy text</button>
<button className="btn btn-primary mx-1">Remove spaces</button>
<button className="btn btn-primary mx-1">Delete text</button>
  <div className="container" style={{ color:props.mode==='dark'?'white':'black'}}>
    <h3>Your Text Summary</h3>
   <p>{text.split(' ').length}  <i>words and</i> {text.length} <i>characters</i> </p>
   <p>{0.008*text.split(' ').length} <b>minutes to read</b> </p>
   <h4>Preview</h4>
   <p>{text}</p>
  </div>
  </div>

  </>
  )
}

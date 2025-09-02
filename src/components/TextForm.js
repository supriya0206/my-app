import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!", "success");
  }

  const handleLoClick = () =>{
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!", "success");

  }

  const handleClearClick = () =>{
    // console.log("Uppercase was clicked:" + text);
    let newText = ' ';
    setText(newText)
    props.showAlert("cleared the text!", "success");

  }

  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
  }
//  Credit :S
  const handleCopy = () => {
    // console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0.9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied the clipboard!", "success");

  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("remove extra spaces!", "success");

  }

   const [text, setText] = useState('');
    // text = "new text" ; // wrong way to change the state
    // setText = "new text" ; // correct way to change the state

  return (
    <>
    <div className="container" style ={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
    {/* <label for="myBox" class="form-label">Example textarea</label> */}
    <textarea className="form-control"  value = {text} onChange={handleOnChange} style ={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Convert to clear Text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}> copy Text</button>
  <button className="btn btn-primary mx-1" onClick={handleExtraSpace}> Remove Extra Spaces</button>

 </div>
 <div className="container my-2" style ={{color: props.mode==='dark'?'white':'#042743'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
 </div>
</>
  )
  }
    
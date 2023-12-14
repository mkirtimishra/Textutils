import React, {useState} from 'react'

export default function TextArea(props) {
  const [text, setText]=useState("");

  const getInput=(event)=>{
    setText(event.target.value);
  }

  const convetUpperCase=() => {
     setText(text.toUpperCase());
     props.showAlert("UpperCase","success");
  }

  const convetLowerCase=() => {
    setText(text.toLowerCase());
    props.showAlert("LowerCase","success");
 }

 const clearAllText=() => {
  setText("");
  props.showAlert("ClearText","success");
}
const RmvWhiteSpaces=()=>{
  let t=text.split(/[ ]+/);    // it return array remove all space using comma
  let te=t.join(" ");          // it return string according to given space
  setText(te);
  props.showAlert("Remove white Space","success");
}

const copyText=()=>{ 
  let text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text Copied","success");
}

   //Switch case but not working
   
  //  switch(props.mode){
    
  //     case 'blue': document.getElementById('textColor').style.color=props.mode;
  //                 break;
  //     case 'light': document.getElementById('textColor').style.color='black';
  //                 break;
  //     case 'yellow': document.getElementById('textColor').style.color=props.mode;
  //                 break;
  //     case 'red': document.getElementById('textColor').style.color=props.mode
  //                 break;
  //     case 'green': document.getElementById('textColor').style.color=props.mode;
  //                 break;
  //     default: document.getElementById('textColor').style.color=props.mode;
  //                 break;
  //  }
   

  return (
    <>
        <div className='container my-3 textColor' >
            {/* <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1> */}
            <h1    >{props.heading}</h1>
            <div >
                {/* <textarea  className="form-control" value={text} placeholder="write text here" id="myBox" onChange={getInput}  style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='light'?'black':'white'}}  >{text}</textarea> */}
                <textarea  className="form-control" value={text} placeholder="write text here" id="myBox" onChange={getInput}  style={{backgroundColor:'white', color:'black'}}  >{text}</textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1' onClick={convetUpperCase}>UpperCase</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1' onClick={convetLowerCase}>LowerCase</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1' onClick={copyText}>copyText</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1'onClick={RmvWhiteSpaces}>Remove White-Space</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1' onClick={clearAllText}>Clear text</button>
        </div>
        {/* <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}> 
          <h2>Your Text Summary</h2>
          <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} character</p>
          <p>{0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes read </p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div> */}

         <div className=" container my-3 textColor " >
          <h2>Your Text Summary</h2>
          <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} character</p>
          <p>{0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes read </p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </>
    
  )
}

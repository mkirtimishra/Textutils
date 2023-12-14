import React, { useState } from "react";
import NavBar from "./component/NavBar";
import TextArea from './component/TextArea';
import Alert from "./component/Alert";

// ctrl + f for select particular item
function App() {

  const[mode, setMode]=useState('light');
  const[btnvalue, setbtnValue]=useState("Enable Dark Mode");
  // const[alert, setAlert]=useState({
  //   type:"success",
  //   msg:"Light mode enabled"
  // });
  const[alert, setAlert]=useState(null);

  const darkMode=(col,txtCol)=>{
    setMode(col);
    showAlert('Dark mode enabled', 'success');
    document.body.style.backgroundColor=col;
    document.body.style.color=txtCol;
    
  }

  //only dark & light Theme code
  // const darkMode=()=>{
  //  if(mode==='light'){
  //   console.log('hmmmm');
  //    setMode('dark')
  //    document.body.style.backgroundColor='#042743';
  //    setbtnValue("Enable light Mode");
  //    showAlert('Dark mode enabled', 'success');
  //     document.title="Textutil-DarkMode";
  //   }
  //  else{
  //    setMode('light')
  //    document.body.style.backgroundColor='white';
  //    setbtnValue("Enable dark Mode");
  //    showAlert('Light mode enabled', 'success');
  //    //for change document title
  //    document.title="Textutil-LightMode";
  //   }
  // }

  const showAlert=(msg, type)=>{
    setAlert({
      msg:msg,
      type:type
      
     })
  }
  setTimeout(()=>{
    setAlert(null);
  },3000);
  
  
  return (
    <>
    
    <NavBar title="TextUtils2" mode={mode} btnvalue={btnvalue} darkmode={darkMode} showAlert={showAlert}/>
     <Alert alert={alert}/>
    {/* <NavBar /> */}
    {/* <NavBar title={3} /> */} 
    <TextArea heading="Analyze Your Text"  mode={mode} showAlert={showAlert}/>
    
    </>
  );
}

export default App;

{ /*jb aap ek variable bhej rhe to same name se another component me accept krre to without inside curly brace to aapko . ka use krna hoga aur {} lga ke accept krre to direct varible name */}
{ /*jb aap another name se accept krre like props then aapko without {} accept krna hoga and . operator ke variable name likhna hoga */}
{ /*props are send by parent they are read only youcan send and accept multiple props */}



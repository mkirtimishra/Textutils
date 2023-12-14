import React from 'react'
//import propTypes from 'prop-types';

export default function NavBar(props) {
 
return (
<>
<nav className={`navbar navbar-expand-lg navbar-${props.mode=='light'?'light':'dark'} bg-${props.mode=='light'?'light':'dark'}`} >

  <div className="container-fluid"  >
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
    </div>
    {/* Theme */}
    <div style={{display:'flex'}}>
      <div onClick={()=>{props.darkmode('blue','white'); props.showAlert('Blue Theme Enabled', 'success');}} style={{backgroundColor:'blue',borderRadius:'5px',  marginRight:'8px', width:'30px'}}></div>
      <div onClick={()=>{props.darkmode('yellow','red'); props.showAlert('Yellow Theme Enabled', 'success');}} style={{backgroundColor:'yellow', borderRadius:'5px', marginRight:'8px' , height:'30px', width:'30px'}}></div>
      <div onClick={()=>{props.darkmode('red','black'); props.showAlert('Red Theme Enabled', 'success');}} style={{backgroundColor:'red', borderRadius:'5px', marginRight:'8px', height:'30px', width:'30px'}}></div>
      <div onClick={()=>{props.darkmode('green','purple'); props.showAlert('Green Theme Enabled', 'success');}} style={{backgroundColor:'green', borderRadius:'5px', marginRight:'8px', height:'30px', width:'30px'}}></div>
    </div>

    {/* Switch */}
    {/* <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.darkmode}/>
      <label className="form-check-label" for="flexSwitchCheckDefault" style={{color:props.mode==='light'?'black':'white'}}> {props.btnvalue}</label>
    </div>   */}


  </div>
</nav>

  </>
  )
}

// PropTypes----
// proptype check krta h aapne jo props ka type define kiya h wahi type ka send kre wrna console me error dega
// isRequired me aapko props bhejna hi hoga undefined nhi hona chahiye
// NavBar.propTypes={
//     title: propTypes.string,
//     //title: propTypes.string.isRequired,   
//     //title: propTypes.number

// }

//default props agr aap props send nhi krte aur child component me props accept krre to default props usme default value daal dega
// NavBar.defaultProps={
//     title: 'set title'
// }

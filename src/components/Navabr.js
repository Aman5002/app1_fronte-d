import React, {useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
function NAVBAR(props) {
  const [userEmail, setuserEmail] = useState('');





  
  const location = useLocation()
  const onClickHandler = () => {
    props.pop(true)
    props.signup(false)
  }
  const onsignuphandler = () => {
    props.pop(true)
    props.signup(true)
  }


const getemail = async() => {


const user_email = await fetch('http://localhost:5000/api/images/fetchuser', {

  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    'auth-token': localStorage.getItem('token')
  },}
)
const json = await user_email.json()
// console.log(json)
setuserEmail(json)
}

useEffect(() => {
  if (props.lh){
    getemail()
  }
  else{
    setuserEmail(' ')
    
  }
 
}, [props.lh]);
  return (
    <div style={{overflow:"hidden"}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'? 'active' : ""}`} aria-current="page" to="/">Home</Link>
        </li>
        {props.lh &&<li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/images'? 'active' : ""}`} to="/images">Images</Link>
        </li>         
        }
      </ul>
      <form className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <div className="useremail">
            {userEmail}
          </div>
        <li className="nav-item">
        
          {!props.lh ?<>  <Link className="btn btn-success mx-1" onClick={onClickHandler} to="#">Log In</Link>  <Link className="btn btn-success mx-1" onClick={onsignuphandler} to="#">SignUp</Link> </>:     <Link className="btn btn-success" onClick={props.logout} to="/">Log Out</Link> }
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
export default NAVBAR

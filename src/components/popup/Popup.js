import React from 'react'
import Login from './login'
import img from './image1.png'
import './popup.css'
function Popup(props) {
  return (
    <>
      <div className='popupback' onClick={ () => props.pop(false) }>
      </div>
      <div className="main">
        <section className="img1">
          <img src={ img } alt='...' />
        </section>
        <Login pop={ props.pop } lh={ props.lh } signup = {props.signup } setsign={props.setsign}/>
      </div>
    </>
  )
};
export default Popup;

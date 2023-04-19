import NavBar from './components/Navabr'
import Home from './components/Home';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Images from './components/Images';
import Protected from './components/Protected';
import Popup from './components/popup/Popup';
function App() {
  const [signup, setsignup] = useState(false);
  const [login, setlogin] = useState(false);
  const [pop, setpop] = useState(false);
  useEffect(() => {
    if (login) {
      setpop(false)
    }
  }, [login]);
  // const pophandler=(x)=>{
  //   setpop(x)
  // }
  const loginhandler = () => {
    setlogin(true)
    setpop(false)
  }
  const logouthandler = () => {
    setlogin(false)
  }
  // const signuph=() => {
  //   set
  // }
  useEffect(() => {
    const data = window.localStorage.getItem('myappkey');
    if (data !== null) setlogin(JSON.parse(data))
  }, [])
  // 
  useEffect(() => {
    window.localStorage.setItem('myappkey', JSON.stringify(login))
  }, [login]);
  return (
    <div>
      <Router>
        <NavBar lh={ login } logout={ logouthandler } pop={ setpop } signup={ setsignup } />
        <div className="container">
          <div className="container my-3" style={ { position: "absolute", overflow: "hidden" } }>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="*" element={ <Home /> } />
              <Route path="/images" element={ <Protected islogin={ login } pop={ setpop } >  <Images /> </Protected> } />
            </Routes>
          </div>
        </div>
        { pop && <Popup pop={ setpop } lh={ loginhandler } signup={ signup } setsign={ setsignup } /> }
      </Router>
    </div>
  );
}
export default App;
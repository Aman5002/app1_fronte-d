import React from 'react'
import './edit.css'
function Editpopup(props) {
const {settitle , setdesc , settag} = props;
const{title , desc, tag} = props


    const titlechange = (event) => {
        settitle(event.target.value);
      };
      const deschange = (event) => {
        setdesc(event.target.value);
      };
      const tagchange = (event) => {
        settag(event.target.value);
      };
      // const imgurlchange = (event) => {
      //   seturl(event.target.value);
      // };
  return (
    <>
    <div>


        
           <div className="edit">
            

            <div  >
      <div>      <button className="xbtn" onClick={()=>{props.showpop(false)}}>
        <b>X</b>
      </button>
        <section className="lg">
          <h4 className='h4'>Edit Your Information</h4>
         
          <form onSubmit={props.edithandler}>
            <div className="cont">
              <label>
                <b>Title</b>
              </label>
              <br></br>
              <input
                type="text"
                placeholder="Title"
                value={title}
            
                onChange={titlechange}
              />
             
              <br></br>
              <label>
                <b>Description</b>
              </label>
              <br></br>
              <input
                type="text"
                placeholder="Description" 
                onChange={deschange}
                value={desc}
                
              />

<br></br>
              <label>
                <b>Tag</b>
              </label>
              <br></br>
              <input
                type="text"
                placeholder="#" 
                onChange={tagchange}
                value={tag}
                
              />
              <br></br>
              
             
          
            </div>
            <button className="btn - btn-primary bt" type="submit" >
              <b>Update</b>
            </button>
          </form>
         
         
        </section>
      </div> </div>

            </div>

           </div>      
    </>
  )
}

export default Editpopup

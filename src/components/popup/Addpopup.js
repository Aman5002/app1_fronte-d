import React from 'react'
import './edit.css'
function Additem(props) {
const {settitle , setdesc , settag, } = props;



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


        
           <div className="add">
          
    
    {/* {status && <h4>{status}</h4>} */}
            

            <div  >
      <div>      <button className="xbtn" onClick={()=>{props.showpop(false)}}>
        <b>X</b>
      </button>
        <section className="lg">
          <h4 className='h4'>Add Item</h4>
         
          <form onSubmit={props.addhandler}>
            <div className="cont">
              <label>
                <b>Title</b>
              </label>
              <br></br>
              <input
                type="text"
                placeholder="Title"
            
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
                
              />
              <br></br>
              <label>
                <b>Image Url</b>
              </label>
              <br></br>
              {/* <input
                type="text"
                placeholder="Image url" 
                onChange={imgurlchange}
               
                
              /> */}

<input type='file' name='file' onChange={props.handleFileChange} required></input>
                   
          
            </div>
            <button className="btn - btn-primary bt" type="submit" >
              <b>Add Item</b>
            </button>
          </form>
         
         
        </section>
      </div> </div>

            </div>

           </div>  


         

    </>
  )
}

export default Additem

import React from 'react'
function Editimg(props) {
  return (
    <>
      <div>
        <div className="edit" style={ { height: "240px" } }>
          <div  >
            <div>      <button className="xbtn" onClick={ () => { props.showpop(false) } }>
              <b>X</b>
            </button>
              <section className="lg" >
                <h4 className='h4'>Edit Your image</h4>
                <form onSubmit={ props.handleimgedit }>
                  <div className="cont">
                    <br></br>
                    <label>
                      <b>Select Image</b>
                    </label>
                    <br></br>
                    <input type='file' name='file' className='upfile' id='file-edit' onChange={ props.handleFileChange } required></input>
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
export default Editimg

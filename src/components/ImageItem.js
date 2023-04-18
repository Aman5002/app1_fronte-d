import React from 'react'
function ImageItem(props) {
  const delethandler = async () => {
    const response = await fetch('http://localhost:5000/api/images/deleteimage', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ id: props.img._id })
    }
    );
    const json = await response.json()
    props.update()
  }
  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card">
          <a href={'./images/'+props.img.imgUrl} target='blank'>
            <img src={'./images/'+props.img.imgUrl }className="card-img-top" style={ { height: "300px" } } alt="..." /></a>

<div className="edic">

            <i className=" far fa-edit mx-2" style={ { cursor: "pointer" } } onClick={ () => { props.id(props.img._id); props.edit(false); props.showadd(false);props.imed(true)  } }></i>
</div>


          <div className="card-body" >
            <h5 className="card-title">{ props.img.title }</h5>
            <h6 className="card-title">#{ props.img.tag }</h6>
            <p className="card-text">{ props.img.description }</p>
            <i className=" far fa-edit mx-2" style={ { cursor: "pointer" } } onClick={ () => { props.id(props.img._id); props.edit(true); props.showadd(false);props.title(props.img.title); props.desc(props.img.description); props.tag(props.img.tag); props.url(props.img.imgUrl);  } }></i>
            {/* <i class=" far fa-edit"></i> */ }
            <i className="far fa-trash-alt mx-2" style={ { cursor: "pointer" } } onClick={ delethandler }></i>  </div>
        </div>
      </div>
    </div>
  )
}
export default ImageItem

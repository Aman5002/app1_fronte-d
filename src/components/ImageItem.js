import React from 'react'
function ImageItem(props) {
  const delethandler = async()=>{
    const response = await fetch('http://localhost:5000/api/images/deleteimage' , {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({id:props.img._id})
  }
  );
  // const json = await response.json()
  props.update()
  }
  return (
    <div className="col-md-4">
    <div className="card my-3">
    <div className="card">
  <a href= {props.img.imgUrl}target='blank'>
    <img src={props.img.imgUrl ? props.img.imgUrl : "https://letusstudy.in/clientside/images/no-image.png" } className="card-img-top" style={{height:"300px"}} alt="..."/></a>
  <div className="card-body" >
    <h5 className="card-title">{props.img.title}</h5>
    <h6 className="card-title">#{props.img.tag}</h6>
    <p className="card-text">{props.img.description}</p>
    <i className=" far fa-edit mx-2"  style={{cursor:"pointer"}}onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});    props.id(props.img._id); props.edit(true) ; props.title(props.img.title); props.desc(props.img.description); props.tag(props.img.tag); props.url(props.img.imgUrl)   } }></i> 
    {/* <i class=" far fa-edit"></i> */}
    <i className="far fa-trash-alt mx-2" style={{cursor:"pointer"}} onClick={delethandler}></i>  </div>
</div>
    </div>
</div>
  )
}
export default ImageItem

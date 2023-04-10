import React from 'react'
function ImageItem(props) {
  return (
    <div className="col-md-3">
    <div className="card my-3">
    <div className="card" >
  <img src={props.img.imgUrl ? props.img.imgUrl : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" } className="card-img-top" style={{height:"300px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.img.title}</h5>
    <h6 className="card-title">#{props.img.tag}</h6>
    <p className="card-text">{props.img.description}</p>
  </div>
</div>
    </div>
</div>
  )
}
export default ImageItem

import React , {useState , useEffect} from 'react'
import ImageItem from './ImageItem';
function Images () {
const imagesinitial =  []
const [showaddbtn, setshowaddbtn] = useState(true);
const [showadditem, setshowadditem] = useState(false);
const [images, setimages] = useState(imagesinitial);
const [title, settitle] = useState("No title specified");
const [desc, setdesc] = useState("No description specified");
const [tag, settag] = useState("");
const [url, seturl] = useState("");
useEffect(() => {
  getimages();
 }, []);
const getimages = async()=>{
  const response = await fetch('http://localhost:5000/api/images/fetchimages' , {
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token')
      },
  }
  );
  const json = await response.json()
  setimages(json);
}
const handleSubmit = async(event) => {
  event.preventDefault();
const response = await fetch("http://localhost:5000/api/images/addimage" , {
method:"POST",
headers:{
  'Content-Type': 'application/json'  ,
  'auth-token': localStorage.getItem('token')
},
  body: JSON.stringify({title: title , description: desc , tag:tag, imgUrl: url})
},
);
const json = await response.json()
console.log(json);
getimages();
setshowaddbtn(true)
setshowadditem(false)
};
const titlechange = (event) => {
 settitle(event.target.value);
};
const deschange = (event) => {
  setdesc(event.target.value);
};
const tagchange = (event) => {
  settag(event.target.value);
};
const imgurlchange = (event) => {
  seturl(event.target.value);
};
  return (
    <>
 {showaddbtn && <div className="container">
    <button className='btn btn-primary' onClick={()=>{setshowadditem(true); setshowaddbtn(false)}}>Add Item</button>
  </div>}
 { showadditem && <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <h3>Add Item Here</h3>
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" onChange={titlechange} id="title" aria-describedby="title"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
    <input type="text" className="form-control" onChange={deschange} id="desc" aria-describedby="desc"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Tag</label>
    <input type="text" className="form-control"  onChange={tagchange} id="tag" aria-describedby="tag"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Image Url</label>
    <input type="text" className="form-control"  onChange={imgurlchange} id="tag" aria-describedby="imgurl"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <button  className="btn btn-danger mx-3" onClick={()=>{setshowadditem(false); setshowaddbtn(true)}}>Close</button>
</form>}
<div className="row my-3">
                <h2>Your Images</h2>
                <div className="container mx-2"> 
                {images.length===0 && 'No Image to display'}
                </div>
                {images.map((img) => {
                  return <ImageItem key={img._id}  img={img} />
                })}
            </div>
                </>
  )
}
export default Images

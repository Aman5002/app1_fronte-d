import React, { useState, useEffect } from 'react'
import ImageItem from './ImageItem';
import Edt from './popup/Edt';
function Images() {
  const imagesinitial = []
  const [showaddbtn, setshowaddbtn] = useState(true);
  const [showadditem, setshowadditem] = useState(false);
  const [images, setimages] = useState(imagesinitial);
  const [title, settitle] = useState("No title specified");
  const [desc, setdesc] = useState("No description specified");
  const [tag, settag] = useState("");
  const [url, seturl] = useState("");
  const [id, setid] = useState("");
  const [imed, setimed] = useState(false);
  const [edit, setedit] = useState(false);
  // console.log(title)
  useEffect(() => {
    getimages();
  }, []);
  const getimages = async () => {
    const response = await fetch('http://localhost:5000/api/images/fetchimages', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    }
    );
    const json = await response.json()
    setimages(json);
  }
  const [image, setImage] = useState({ data: '' })
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData()
    formData.append('file', image.data)
    const response1 = await fetch('http://localhost:5000/api/images/image', {
      method: 'POST',
      body: formData,
    })

    const response = await fetch("http://localhost:5000/api/images/addimage", {
      method: "POST",

      body: JSON.stringify({ title: title, description: desc, tag: tag }),
      // body:formData,
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    },
    );
    const json = await response.json()
    // console.log(json);
    getimages();
    setshowaddbtn(true)
    setshowadditem(false)
    //  console.log(formData)
  };
  // console.log(imed, "images")
  // console.log(edit, " edit")
  const handleFileChange = (e) => {
    const img = {
      data: e.target.files[0],
      // data : './images/Screenshot (1).png-1681800589661-.png'
    }
    // console.log(e.target.files)
    setImage(img)
  }
  function clearhandler() {
    settitle("No Title Specified");
    setdesc("No Description Specified");
    settag("General");
    seturl("");
    setImage('')
  }
  const handleimgedit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response1 = await fetch('http://localhost:5000/api/images/image', {
      method: 'POST',
      body: formData,
    })
    const response = await fetch("http://localhost:5000/api/images/edim", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ id: id })
    },
    );
    const json = await response.json()
    // console.log(json);
    getimages();
    setedit(false)
    setimed(false)
  };


  const handleSubmitedit = async (event) => {
    event.preventDefault();
    // let formData = new FormData()
    // formData.append('file', image.data)
    // const response1 = await fetch('http://localhost:5000/api/images/image', {
    //   method: 'POST',
    //   body: formData,
    // })


    const response = await fetch("http://localhost:5000/api/images/editimage", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ id: id, title: title, description: desc, tag: tag, })
    },
    );
    const json = await response.json()
    // console.log(json);
    getimages();
    setedit(false)
  };
  window.onkeydown = function (event) {
    if (event.keyCode === 27) {
      setedit(false);
      setshowadditem(false)
    }
  }
  return (
    <>
      { showaddbtn && <div className="container">
        <button className='btn btn-primary' onClick={ () => { setshowadditem(true); clearhandler(); } }>Add Item</button>
      </div> }
      <div className="row my-3">
        <h2>Your Images</h2>
        <div className="container mx-2">
          { images.length === 0 && 'No Image to display' }
        </div>
        { images.map((img) => {
          return <ImageItem key={ img._id } img={ img } id={ setid } edit={ setedit } title={ settitle } desc={ setdesc } tag={ settag } url={ seturl } update={ getimages } showadd={ setshowadditem } imed={ setimed } />
        }) }

        { (edit || imed || showadditem) && <Edt showedit={ setedit } additem={ showadditem } settitle={ settitle } setdesc={ setdesc } imed={ imed } setimed={ setimed } settag={ settag } seturl={ seturl } edithandler={ handleSubmitedit } handleimgedit={ handleimgedit } title={ title }
          desc={ desc }
          tag={ tag }
          url={ url }
          addhandler={ handleSubmit }
          showadd={ setshowadditem }
          handleFileChange={ handleFileChange }
        // setimage={setImage}
        /> }
        
      </div>
    </>
  )
}
export default Images

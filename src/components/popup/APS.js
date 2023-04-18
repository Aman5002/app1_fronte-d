import React from 'react'

function APS() {
    const [image, setImage] = useState({ data: '' })
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) => {
      e.preventDefault()
      let formData = new FormData()
      formData.append('file', image.data)
      const response = await fetch('http://localhost:7000/image', {
        method: 'POST',
        body: formData,
      })
      if (response) setStatus(response.statusText)
    }
  
    const handleFileChange = (e) => {
      const img = {
       
        data: e.target.files[0],
      }
      setImage(img)
    }
    return (
      <div className='App'>
       
        <form onSubmit={handleSubmit}>
          <input type='file' name='file' onChange={handleFileChange}></input>
          <button type='submit'>Submit</button>
        </form>
        {status && <h4>{status}</h4>}
      </div>
  )
}

export default APS

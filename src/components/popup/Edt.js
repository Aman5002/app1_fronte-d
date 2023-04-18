import React from 'react'
import './edit.css'
import Editpopup from './Editpopup'
import Additem from './Addpopup'
import Editimg from './Editimg'
function Edt(props) {
  return (
    <div>
      <div className="pops" >
        <div className="all" onClick={ () => { props.showadd(false); props.showedit(false); props.setimed(false) } }>

        </div>
        <div className="m">

          { props.showedit && !props.imed && <Editpopup showpop={ props.showedit } settitle={ props.settitle } setdesc={ props.setdesc } settag={ props.settag } seturl={ props.seturl } edithandler={ props.edithandler } title={ props.title }
            desc={ props.desc }
            tag={ props.tag }
            url={ props.url } handleFileChange={ props.handleFileChange } /> }

          { props.additem && <Additem showpop={ props.showadd } settitle={ props.settitle } setdesc={ props.setdesc } settag={ props.settag } seturl={ props.seturl } addhandler={ props.addhandler } title={ props.title }
            desc={ props.desc }
            tag={ props.tag }
            url={ props.url }
            handleFileChange={ props.handleFileChange } /> }

          { props.imed && <Editimg handleFileChange={ props.handleFileChange } showpop={ props.setimed } handleimgedit={ props.handleimgedit } /> }



        </div>

      </div>
    </div>
  )
}

export default Edt

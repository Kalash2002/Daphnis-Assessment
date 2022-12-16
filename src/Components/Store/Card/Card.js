import React from 'react'
import './card.css'
import logo from './send.png';

const Card = () => {
  return (
    <div className="card-container">

        <div className="single-card">
          <div className="card-image">
            <img src="https://i.ibb.co/jwrGZPN/images-1.jpg" alt="medicine"/>
          </div>
            <div className="card">

                <div className="card-details">
                    <div className="card-details-title">
                        <h3>TITLE OF MEDICINE</h3>
                    </div>
                    <div className="card-details-price">
                            <span ><span className='rate' style={{color:"red", fontWeight:"600"}}>Rs 123456</span> / stripes</span>
                    </div>
                    <div className="card-details address">
                        <div  className='company-name'><span>Glenmark Pharma</span></div>
                        <div className='company-add'><span >Parvat patiya, Surat, Gujarat</span></div>
                    </div>
                </div>
             </div>
          <div className="card-contact_supplier">
            <hr className='divid-line'/>
               <div className='contact-content'>
                    <img className='send-logo' src={logo}/>
                    <h2 className='supplier-contact'>Contact Supplier</h2>
                </div>
        </div>
        <div className='color-div' style={{backgroundColor:"red"}}>
            <span style={{color:"red", margin:'0,0'}} className="color-heading">.</span>
        </div>
        </div>

    </div>


  )
}

export default Card




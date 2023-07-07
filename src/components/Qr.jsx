import React from 'react'
import './styles/qr.css'

export const Qr = () => {
    return (
      <div className='cards__container'>
        <div className="card__container">
          <div className='card__img'>
              <img src="../assets/image-qr-code.png" alt="qr-code" />
          </div>
          <div className='card__info'> 
              <div className='card__title'>
                <h3>Improve your front-end skills by building proyects</h3>
              </div>
              <div className='card__text'>
                <p>Scan the QR code to visit Frontend mentor and take your coding skills to the next level</p>
              </div>
          </div>
      </div>
    </div>
  )
}

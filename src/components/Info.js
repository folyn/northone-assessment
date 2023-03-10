import React from 'react';
import '../styles/scss/info.scss';
import FlagImage from '../styles/images/other-fees-american-flag.svg';
const Info = () => {
  return (
    <div className='info'>
      <span className='main-heading'><b>Other Fees</b></span>
      <p className='sub-heading'>We don't hide fees in fine print, they're right here</p>
      <div className='addtional-info'>
        <img src={FlagImage} alt='other-fees-american-flag.svg' className='img-flag'/>
        <div className='transfer'>
          <span className='fee-value'><b>$15</b></span>
          <span className='fee-text'><b>Domestic Wire Transfer</b></span>
        </div>
      </div>
      <div className='addtional-info-content'>
        <span>Pay $15 whenever you send or receive a domestic</span><br/>
        <span>wire transfer. We work hard to keep this fee low</span>
      </div>
    </div>
  )
};

export default Info;
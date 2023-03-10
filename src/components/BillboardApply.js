import React from 'react';
const BillboardApply = ( { applyTextHead}) => {
  return (
    <div className='billboard-apply'>
      <span style={{fontSize:'45px'}}>
        <b dangerouslySetInnerHTML={{__html:applyTextHead}}>
        </b>
      </span>
      <p style={{fontSize:'25px'}}>Get a smart, digital Deposit Account for one low monthly fee<sup>1</sup>. Join now
          with no commitments, cancel anytime.</p>
      <a href=' https://join.northone.com/'>
        <button className='btn-apply-account'>Apply for an Account</button>
      </a>
    </div>
  )
}

export default BillboardApply;
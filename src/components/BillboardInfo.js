import React from 'react';
import cardImage from "../styles/images/wallet-card_Black&White.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BillboardInfo = ({ postFee, postCardContent}) => {
  return (
    <div className='billboard-info'>
      <img src={cardImage} alt='wallet-card_Black&White.png' style={{width:'40%', height:'40%'}}/>
      <span style={{fontSize:'80px'}}><b>$10</b></span>
      <span style={{fontSize:'20px'}}><b>per month</b></span><br/>
      <span><b>No additional fees for:</b></span>
        <ul>
        {
          postCardContent.map((item) => 
           <li style={{listStyleType:'none'}} className='card-content-item'><FontAwesomeIcon icon={faCheck}/>&nbsp;&nbsp;{item}</li>
          )
        }
        </ul>
        <p>There is a $15 fee for outgoing and incoming wires</p>
    </div>
  )
}

export default BillboardInfo;
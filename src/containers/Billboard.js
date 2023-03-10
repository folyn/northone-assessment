import React from 'react';
import BillboardApply from '../components/BillboardApply';
import BillboardInfo from '../components/BillboardInfo';
import { billboardConstant } from '../constant/contant';
import { postCardContent } from '../constant/contant';
import '../styles/scss/board.scss'
const Billboard = () => {
  return (
    <div className='billboard'>
      <BillboardApply
        applyTextHead = {billboardConstant.applyTextHead} 
      />
      <BillboardInfo
        postFee = {billboardConstant.postFee}
        postCardContent={postCardContent}
      />
      <div style={{flex:1}}/>
    </div>
  )
}
export default Billboard;
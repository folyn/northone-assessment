import React from 'react';
import '../styles/scss/highlight.scss'
const Highlight = ({ titleHeader, titleContent}) => {
  return (
    <div className='highlight'>
      <p><b>{titleHeader}</b></p>
      <span dangerouslySetInnerHTML={{__html:titleContent}}></span>
    </div>
  )
}

export default Highlight;
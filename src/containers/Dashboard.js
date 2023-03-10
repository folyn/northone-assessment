import React from 'react';
import Billboard from './Billboard';
import Highlight from '../components/Highlight';
import Info from '../components/Info';
import { highlightTitle } from '../constant/contant';
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Billboard/>
      <Highlight
        titleHeader = {highlightTitle.titleHeader}
        titleContent = {highlightTitle.titleContent}
      />
      <Info/>
    </div>
  )
}
export default Dashboard;
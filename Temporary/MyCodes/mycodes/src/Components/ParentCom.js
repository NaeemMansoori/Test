import React from 'react'
import {ChildComp} from './ChildComp';

const ParentCom = () => {
    const newVal=((newVal)=>{
        console.log(newVal);
    })
  return (
    <div>
      <h1>parent is working:</h1>
      {/* <ChildComp data={newVal}/> */}
      <ChildComp ClickP={newVal} />
    </div>
  )
}

export default ParentCom

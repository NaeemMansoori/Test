import React from 'react'
import Activities from './Activities'
import {useHistory} from "react-router-dom";
const MultiAct = () => {
    
  return (
    <div>
        <Activities title="testing" desc="desctesting" />
        <Activities title="testig" desc="desctesting" />
        <Activities title="testig" desc="desctesting" />
        <Activities title="teing" desc="desctesting" />
    </div>
  )
}

export default MultiAct

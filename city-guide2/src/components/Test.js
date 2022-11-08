import React from 'react';
import { useHistory } from "react-router-dom";
import vacations from '../static/vacations.png'


const Test = () => {
  let history = useHistory();

  return (
    <div>
        <img onClick={()=>{history.push("/NavBar")}} src={vacations} className="rounded" alt="Loading" />
      
    </div>
  )
}

export default Test

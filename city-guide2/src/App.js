
import './App.css';
import Activities from './components/Activities';

import Icon from './components/Icon';



import Iframe from './components/Iframe';
import NavBar from './components/NavBar';
// import Test from './components/Test';
import MultiAct from './components/MultiAct';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  const showHome =()=>{
    return(
      <div>
      <NavBar />
    <Iframe />
     <Icon />
   <MultiAct title="testing" desc="desctesting" />
    <MultiAct title="testing" desc="desctesting" />
    <MultiAct title="testing" desc="desctesting" />
    <MultiAct title="testing" desc="desctesting" />
<MultiAct/>

      </div>
    )
  }

  const showRest =()=>{
    return(
      <div>
      {/* <NavBar /> */}
    <Iframe />
    <Icon />
    <Activities title="testing" desc="desctesting" />
    <Activities title="testing" desc="desctesting" />
    <Activities title="testing" desc="desctesting" />
    <Activities title="testing" desc="desctesting" />

      </div>
    )
  }

  const showAtm =()=>{
    return(
      <div>
      {/* <NavBar /> */}
    <Iframe />
    <Icon />
    <Activities title="testing" desc="desctesting" />
    <Activities title="testing" desc="desctesting" />
    <Activities title="testing" desc="desctesting" />
    <Activities title="testing" desc="desctesting" />

      </div>
    )
  }

  const showIcon =()=>{
    return(
      <div>
      {/* <NavBar /> */}
    <Iframe />
    <Icon />
    <Activities title="testing" desc="desctesting" />
    <Activities title="testing" desc="desctesting" />
    <Activities title="testing" desc="desctesting" />
    <Activities title="testing" desc="desctesting" />

      </div>
    )
  }
  return (
    <>


    
    
     
      <Router>
        <Switch>
          <Route exact path="/NavBar" component={NavBar} />
          <Route exact path="/Rest" component={showRest} />
          <Route exact path="/" component={showHome} />
          <Route exact path="/Icon" component={showIcon} />
          <Route exact path="/Atm" component={showAtm}/>
           <Iframe />
          <Activities /> 
        </Switch>
      </Router>
    </>
  );

}

export default App;





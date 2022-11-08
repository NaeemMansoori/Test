import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

import React from 'react'
// import ReactDOM from 'react-dom'


function App() {
  return (

    <>


      <Navbar title="City-Guide" SearchBar={true} /> 
      <Todos />
      <Header />
    </>


  );

}
export default App;

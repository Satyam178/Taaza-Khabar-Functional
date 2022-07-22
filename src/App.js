import './App.css';

import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Countries from './components/Countries';


const App = () => {

const apiKey = process.env.REACT_APP_NEWS_API

const [progress, setProgress] = useState(0)

const [country, setCountry] = useState("in")
useEffect(()=>{
  window.scrollTo({top:0,left:0,behaviour:'smooth'});
},[country])



const setCountryHandler = (ctry) => {

     setCountry(ctry);

}


 
    return (
      <div >
          
        <Router>

        <div>
     

     <div />

     {/* 👇️ scroll to top on button click */}
     <button
       onClick={() => {

         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
       }}
       style={{
         position: 'fixed',
         padding: '0.5rem',
         fontSize: '14px',
         bottom: '40px',
         right: '40px',
         backgroundColor: '#0C9',
         color: '#fff',
         textAlign: 'center',
         zIndex: '1',
         borderRadius:'4px',
         border:'0.5px solid black'
       }}
     >
       Scroll to top
     </button>
   </div>







        <LoadingBar
        color='#f11545'
        progress={progress}
      
      />
        <Navbar/>
        <div  style={{zIndex:"10",position:"fixed",bottom:'80px',right:'40px'}}>
      <Countries setCountryHandler={setCountryHandler}/>
      </div>
      
          <Routes>
             <Route exact path="/" element={<News setProgress={setProgress} apiKey = {apiKey} key="general" pageSize={5} country={country} category="general"/>} />
             <Route exact path="/general" element={<News setProgress={setProgress}  apiKey = {apiKey} key="general" pageSize={5} country={country} category="general"/>} />
             <Route exact path="/business" element={<News setProgress={setProgress}  apiKey = {apiKey} key="business" pageSize={5} country={country} category="business"/>} />
             <Route exact path="/entertainment" element={<News setProgress={setProgress}  apiKey = {apiKey} key="entertainment" pageSize={5} country={country} category="entertainment"/>} />
             <Route exact path="/health" element={<News setProgress={setProgress}  apiKey = {apiKey} key="health" pageSize={5} country={country} category="health"/>} />
             <Route exact path="/science" element={<News setProgress={setProgress} apiKey = {apiKey} key="science" pageSize={5} country={country} category="science"/>} />
             <Route exact path="/sports" element={<News setProgress={setProgress}  apiKey = {apiKey} key="sports" pageSize={5} country={country} category="sports"/>} />
             <Route exact path="/technology" element={<News setProgress={setProgress}  apiKey = {apiKey} key="technology" pageSize={5} country={country} category="technology"/>} />
          </Routes>

           {/* <Footer/> */}

          

        </Router>
        

      </div>
    )
}

export default App


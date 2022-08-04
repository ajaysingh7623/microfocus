import React,{useState,useEffect,useCallback,useRef} from "react";
import './App.css';
import {
    Link
  } from "react-router-dom";
  import Clock from 'react-live-clock';
  import { useCoordinates } from "./useCoordinates";
import { useEventCallback } from "./useEventCallback";


function Fixed() {
    const [checked, setChecked] = React.useState(true);
    const [view, setView] = React.useState(true);

    const handleRadio=(event)=>{
        setChecked(event.target.value);
     }
     const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setView(false);
        }
      }, []);
    
      useEffect(() => {
        document.addEventListener("keydown", escFunction);
    
        return () => {
          document.removeEventListener("keydown", escFunction);
        };
      }, [escFunction]);
      const enterFunction = useCallback((event) => {
        if (event.keyCode === 13) {
            setView(true);
        }
      }, []);
    
      useEffect(() => {
        document.addEventListener("keydown", enterFunction);
    
        return () => {
          document.removeEventListener("keydown", enterFunction);
        };
      }, [enterFunction]);

    
  return (<>
   
    <div class="fixed-header">
        <div class="container">

        <div class="parent">
  <div class="children-1">
    <p onChange={handleRadio}>Position <input type="radio" id="center" name="center" value="center" checked={checked === "center"} /> Center &nbsp;&nbsp;<input type="radio" id="right" name="right" value="right" checked={checked === "right"} /> Lower Right
      
    </p>
  </div>
  
  <div class="children-2">
    <p style={{color:"yellow"}}>Plz ESC key to hide the window.Enter to show it again <span style={{color:"white",fontSize:"30px"}}> <Clock
          format={'HH:mm:ss'}
          ticking={true}
           /></span>
           </p>
</div>
</div>

</div>
    </div>
    <div className={checked=='center'?"xcenter":checked=='right'?"xcorner":""}>
       {view==true? <div className="diving"  draggable="true">{checked=='center'?"Center":checked=="right"?"Lower Right":"Floating..."} </div>:null}

    </div>
      
    <div class="fixed-footer">
        <div class="container" ><a style={{color: 'white',textDecoration:"none"}} href="/page">Go to Page 2<span style={{fontSize:"30px"}}>&#8594;</span></a>
</div>        
    </div>
  </>);
}

export default Fixed;

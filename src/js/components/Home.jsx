import React from "react";
import {useState} from "react";

const Home = () => {
    const [ color, setColor] = useState("red");
 
     return (
         <div>
             <div className="background"></div>
             <div className = "traffic_light">
                 <div onClick={() => setColor("red")} className={"light " + (color === "red" ? "red" : "" )}></div>
                 <div onClick={() => setColor("yellow")} className={"light " + (color === "yellow" ? "yellow" : "" )}></div>
                 <div onClick={() => setColor("green")} className={"light " + (color === "green" ? "green" : "" )}></div>
             </div>
         </div>
     );
 };

 export default Home;
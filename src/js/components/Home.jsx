import React from "react";
import {useState} from "react";

const Home = () => {
    const [ color, setColor] = useState("red");
 
     return (
         <div>
             <div className="background"></div>
             <div className = "traffic_light">
                 <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? "off" : "" )}></div>
                 <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? "off" : "" )}></div>
                 <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? "off" : "" )}></div>
             </div>
         </div>
     );
 };

 export default Home;
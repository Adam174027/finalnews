import React from 'react'
import { useState } from 'react';
import LiveStyles from '../styles/Livescore.module.css'
import Live from '../Components/Live'

const livescore = () => {

    
    const [open, setOpen] = useState("");
    const handleOpen = () =>{
        setOpen("livescore");
    }
    const [score, setScore]= useState([]);

    fetch('https://api.cricapi.com/v1/currentMatches?apikey=e7a764d5-be19-4f0d-9477-e565b6d4ce74&offset=0')
        .then(response => response.json())
       .then(response => setScore(response.data))
       .catch(err => console.error(err));

  return (
    <div className={LiveStyles.container}>
        <div className={LiveStyles.left}>
<ul  className={LiveStyles.list}>
<li className={LiveStyles.listItem}>
    <a className={LiveStyles.text} onClick= { handleOpen}>Live Scores</a>
</li>
<li className={LiveStyles.listItem}>
    <a className={LiveStyles.text}>Schedule</a>
</li>
</ul>
</div>
<div className={LiveStyles.middle}>
  <div className={open=="livescore"?"livescore":"live"}>

      {score.map(e => <Live live  = { e }/>)}
     
      <style jsx>
         {`
         
         .livescore{
           display: flex;
           flex-direction: column;
           margim : 15px 15px;
           padding : 15px 15px;
         }
         .live{
            display: none;
        }`}
        </style>
  </div>
</div>
    </div>
  )
}

export default livescore
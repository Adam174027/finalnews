import React from 'react'
import { useState  } from 'react';

const Live = ({live}) => {
 

  return (
    
    <div>
      <h2>{live.name}, {live.matchType}</h2>
      {live.score.map(score => <h3>{score.inning}    {score.r}/{score.w} - {score.o} Over</h3>)}
    </div>
  )
}

export default Live
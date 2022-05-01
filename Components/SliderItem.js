
import SliderItemStyles from "../styles/sliderItem.module.css" 
import React from "react";
 import ReactDOM from "react-dom";


const SliderItem = ({property}) => {
  return (
    <div className={SliderItemStyles.main}>
      <div className={SliderItemStyles.league}>
      <img src={property.league_logo} className={SliderItemStyles.league_logo}/>
      <h1>{property.league_name},{property.country_name}</h1>
      </div>

      <h1 className={SliderItemStyles.round}>{property.league_round}</h1>

      <div className={SliderItemStyles.score}>
      <img src={property.home_team_logo} className={SliderItemStyles.team_logo}/>
      <p className={SliderItemStyles.team}>{property.event_home_team}</p>
      <p className={SliderItemStyles.final}>{property.event_final_result}</p>
      <p className={SliderItemStyles.team}>{property.event_away_team}</p>
      <img src={property.away_team_logo} className={SliderItemStyles.team_logo}/>
      </div>

      <h1 className={SliderItemStyles.round}>{property.event_status}"</h1>
      
    </div>
  )
}

export default SliderItem
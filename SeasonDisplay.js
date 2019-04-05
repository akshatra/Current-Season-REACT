import React from 'react';
import './SeasonDisplay.css'; //webpack will do the rendering.

const SeasonConfig={
    summer: {
        text: "Let's hit the beach !",  
        iconName: 'sun'
    },
    winter: {
        text: 'It is chilly !',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) =>{
    if( month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'; //shows that we are in the northern hemisphere
    }
    else{
        return lat> 0 ? 'winter' : 'summer'; //for southern hemisphere
    }
}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const{text, iconName}= SeasonConfig[season];//{text, iconName}
    
    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>;
        <i className={`icon-right massive ${iconName} icon`}/> 
    </div>
    );//set the class name and the vaiable name as icon
};

export default SeasonDisplay;
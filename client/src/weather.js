import React, { useState, useEffect } from 'react'
import kelvinToCelsius  from 'kelvin-to-celsius'
import { connect } from 'react-redux';
import {actions} from './redux/actions'
import './Style.css';
import Icon1 from './images/01n.svg'
import Icon2 from './images/03n.svg'
import Icon4 from './images/10n.svg'
import Icon3 from './images/04n.svg'

import {createNewHistory} from './service'

const mapDispatchToProps = (dispatch) => ({
    addNewHistory: (history) => dispatch(actions.addNewHistory(history))
})

function mapStateToProps(state) {
    return {
      user: state.userReducer.user
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(function Weather(props) {
    // const apiKey = "e2e60eaf8f762035f36f9fcc1c99395b";//lea apiKey
    const apiKey="656628c4bdc296f6f5c231d2c940a647";//my apiKey
    const { city, addNewHistory , user,iconArr} = props;
    const [resultsWeater, setResultsWeater] = useState(null)
    const [classNameIcon, setClassNameIcon] = useState('')



    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
            { method: 'GET' }).then(res => res.json()).then(data => {
                console.log(data)
                const weather={ 
                    date:new Date(Date.now()),
                    city:city,
                    description: data.weather[0].description,
                    temp:kelvinToCelsius(data.main.temp),                    
                    minTemp:kelvinToCelsius(data.main.temp_min),
                    maxTemp:kelvinToCelsius(data.main.temp_max),
                    icon: data.weather[0].icon
                }
                setClassNameIcon(iconArr.filter(x=>x.key==weather.icon));
                setResultsWeater(weather)
                addNewHistory(weather)
                createNewHistory(weather, user._id)
            })
    }, [])
    
    return (
        <div>
            <h1>Weather in {city}</h1>
            {resultsWeater &&
            <div className="bg">
            {classNameIcon.length!==0&&
            <div className={"picSize "+classNameIcon[0].value} >
            </div>} 
                <ul> 

                    <li>
                        today: {resultsWeater.description}
                    </li>
                    <li>
                        the temp now: {resultsWeater.temp}
                    </li>
                    <li>
                        the min temp today: {resultsWeater.minTemp}
                    </li>
                    <li>
                        the max temp today: {resultsWeater.maxTemp}
                    </li>
                 </ul>
                

            </div>}

                            
        </div>
    )
})











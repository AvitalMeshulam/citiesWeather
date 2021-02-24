import React, { useState } from 'react'
import ChooseCity from './ChooseCity'
import  Weather  from './weather'
import HistoryReport from './HistoryReport'
import './Style.css'
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
}

export default connect(mapStateToProps)(function Home(props) {
  const { page, setPage, user } = props;
  const [city, setCity] = useState()
  const [personalPages, setPersonalPages] = useState(0)
  const iconArr=[{key:"10n",value:"icon10"},{key:"01n",value:"icon1"},{key:"02n",value:"icon2"},{key:"04d",value:"icon4"}]

  function toWeatherPage(cityName) {
    setCity(cityName)
    setPersonalPages(1)
  }
  return (
    <div >

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" >hello {user.name}!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <button onClick={() => { setPersonalPages(0) }} className="btn btn-link" >
              <li className="nav-item page===0:active" >
                <a className="nav-link" href="#" >choose City</a>
              </li>
            </button>
            <button onClick={() => { setPersonalPages(2) }} className="btn btn-link" >
              <li className="nav-item page===1:active" >
                <a className="nav-link" href="#" > my history search</a>
              </li>
            </button>
          </ul>
        </div>
      </nav>
      {personalPages == 0 && <ChooseCity city={city} setCity={toWeatherPage} />}
      {personalPages == 1 && <Weather iconArr={iconArr} city={city} />}
      {personalPages == 2 && <HistoryReport />}
    </div>
  )
})




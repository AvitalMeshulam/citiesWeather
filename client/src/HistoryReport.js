import React, { useState } from 'react'
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    history: state.historyReducer.history
  };
}

export default connect(mapStateToProps)(function Home(props) {
  const { history } = props
  return (
    <div>
      <table className="table bg" >
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">City</th>
            <th scope="col">description</th>
            <th scope="col">Temperature</th>
            <th scope="col">maximum Temperature</th>
            <th scope="col">minimum Temperature</th>
          </tr>
        </thead>
        <tbody>

          {history.map((hist, index) => {
            console.log(hist);
            if(hist){
            let d = new Date(hist.date)
            return (
              <tr key={index}>
                <td>{d.toLocaleDateString()}</td>
                <td>{hist.city}</td>
                <td>{hist.description}</td>
                <td>{hist.temp}</td>
                <td>{hist.maxTemp}</td>
                <td>{hist.minTemp}</td>
              </tr>
            )}
          })
          }</tbody>
      </table>
    </div>
  )
})




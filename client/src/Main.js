import React,{useEffect, useState} from 'react'
import Login from './Login/Login'
import ChooseCity from './ChooseCity'
import Register from './Register/Register'
import PersonalPage from './PersonalPage'

export default function Main(props){
  
    let[page,setPage]=useState(0) 

    return(<>
    <div className="container" >
        <div className="row">
            <div className="col-6">
            {page===0&&<Login page={page} setPage={setPage}/>}
        </div>
    <div className="col-6">
    {page===0&&<Register page={page} setPage={setPage}/> }
    </div>
    </div >
    <div className="col d-flex  align-items-center  flex-column myTop">
    {page===1&&<PersonalPage page={page} setPage={setPage}/> }
    </div>
    </div>  
    </>
    )
}



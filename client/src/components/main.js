import React,{useState} from 'react'
import Login from './login'
import Register from './register'
import PersonalPage from './PersonalPage'

export default function Main(props){
  
    let[page,setPage]=useState(0) 

    return(<>
    <div className="container" >
      {page===0&&
        <div className="row">
            <div className="col-6">
            <Login page={page} setPage={setPage}/>
        </div>
    <div className="col-6">
    <Register page={page} setPage={setPage}/> 
    </div>
    </div >}
    <div className="col d-flex  align-items-center  flex-column">
    {page===1&&<PersonalPage page={page} setPage={setPage}/> }
    </div>
    </div>  
    </>
    )
}



import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { createUser } from '../service'

export default function Register(props) {
  let [toRegister, setToRegister] = useState(false)
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [success, setSuccess] = useState(true)
  const [mail, setMail] = useState()
  const {setPage} = props

  function register() {
    const newUser = { name: name, password: String(password), mail: mail };
    createUser(newUser).then((s) => {
      if (s === true) {
        setPage(1)
      }
      setSuccess(s)
    });
  }

  return (<div id="backgroundLogin">

    <div className=" d-flex justify-content-around" >

      <button variant="dark" onClick={() => { setToRegister(!toRegister) }} className="buttonStyle btn">Register</button>{' '}
    </div>

    {toRegister &&
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>mail</Form.Label>
          <Form.Control type="email" placeholder="mail" onChange={(e) => setMail(e.target.value)} />
        </Form.Group>
        {!success &&
            <div className="alert alert-danger" role="alert" >
              name alredy exist....
      </div>
          }
        <Button variant="primary" type="button" onClick={register}>
          Next  </Button>
      </Form>}

  </div>)
}





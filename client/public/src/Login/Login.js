import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { login } from '../service'
import '../Style.css';

export default function Login(props) {
  const [toShowLogin, setToShowLogin] = useState(false)
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [success, setSuccess] = useState(true)

  const { page, setPage } = props

  async function toLogin() {
    const user = { name: name, password: String(password)  };
    await login(user).then((s) => {
      setSuccess(s)
      if (s === true) {
        setPage(1)
      }
    })
  }

  return (
    <div>
      <div className=" d-flex justify-content-around" >
        <button variant="dark" onClick={() => { setToShowLogin(!toShowLogin) }} className=" buttonStyle btn ">Login</button>{' '}
      </div>
      {toShowLogin &&
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          {!success &&
            <div className="alert alert-danger" role="alert" >
              name or password incorrect!
      </div>
          }
          <Button variant="primary" type="button" onClick={toLogin}>
            Next  </Button>
        </Form>}
    </div>
  )
}
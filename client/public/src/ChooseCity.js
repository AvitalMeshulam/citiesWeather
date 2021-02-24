import React,{useState} from 'react'
import {Weather} from './weather'
import { Form,InputGroup,FormControl,Col} from 'react-bootstrap';


    export default function ChooseCity(props) {
    const[searchCity,setSearchCity]=useState(false)
    const[isDisable,setIsDisable]=useState(true)
    const[onChangeCity,setOnChangeCity]=useState('')
    const{city,setCity}=props
        function checkInput(e){
            setOnChangeCity(e.target.value)
            if(onChangeCity)
            setIsDisable(false)
        } 
        return (
            <> 
<label><h4> enter your city: </h4></label>
<Form>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly >
        city
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text disabled={isDisable} onClick={(e)=>setCity(onChangeCity)}>search</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl  onChange={(e)=>checkInput(e)} id="inlineFormInputGroup" placeholder="city..." />
      </InputGroup>
    </Col> 
  </Form.Row>
</Form>
    </>           
)}



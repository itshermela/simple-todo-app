import React from "react"
import {Form, Button} from "react-bootstrap"
import { FaPlusCircle } from 'react-icons/fa'
import { CiCirclePlus } from "react-icons/ci";
function FormTodo(props) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = event => {
      event.preventDefault();
      if (!value) return;
      props.addTodo(value);
      setValue("");
    };

    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group className="form-group">
        <Button variant="light" type="submit" className="plus-button">
            <CiCirclePlus className="icon"/>
        </Button>
        <Form.Control type="text" className="input" value={value} onChange={event => setValue(event.target.value)} placeholder="Add new todo" />
        
      </Form.Group>
      
    </Form>
    );
  }
export default FormTodo

import axios from 'axios';
import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap';
export default class AddToDo extends Component {
    handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_SERVER}/new-todo`;
        let newToDo = {
            ToDo: e.target.list.value
        };
        try {
            await axios.post(url, newToDo).then((res) => this.props.addNewToDo(res.data)).catch((err)=> console.log(err.message))
        } catch (error) {
            console.log(error.message)
        }
    }
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="list">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a ToDo task..."
              />
            </Form.Group>
            <Button variant="success" type="submit">Add task</Button>
        </Form>
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios';
import {Button, Form, Modal} from "react-bootstrap";

export default class EditToDo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todo_id: this.props.todoId,
         clicked: false
      }
    }
    handleEdit = async (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_SERVER}/updatetodo/${this.state.todo_id}`;
        let editedToDo = {
            ToDo: e.target.list.value
        }
        try {
            await axios.put(url, editedToDo);
            this.setState({
                clicked: false
            });
            this.props.getList();
        } catch (error) {
            console.log(error);
        }
    }
    handleOpen = () => {
        this.setState({
          clicked: true,
        });
      };
      handleClosed = () => {
        this.setState({
          clicked: false,
        });
      };
  render() {
    return (
      <div>
         <Button
          className="EditBook"
          variant="warning"
          onClick={this.handleOpen}
        >
          Edit ✏️
        </Button>
        <Modal
          show={this.state.clicked}
          onHide={this.handleClosed}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Edit Your ToDo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleEdit}>
              <Form.Group className="mb-3" controlId="list">
                <Form.Label>ToDo Task</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Edited Task"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit Edited Task!
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClosed}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios';
import {Button} from 'react-bootstrap'
export default class DeleteToDo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todo_id: this.props.todoId
      }
    }
    handleDelete = async () => {
        try{
            const url = `${process.env.REACT_APP_SERVER}/todo/${this.state.todo_id}`;
            await axios.delete(url);
            this.props.getList();
        }catch (error) {
            alert(error.message)
        }
    }
  render() {
    return (
      <div>
        <Button
          variant="danger"
          className="DeleteButton"
          onClick={this.handleDelete}
        >
          Delete 🗑️
        </Button>
      </div>
    )
  }
}

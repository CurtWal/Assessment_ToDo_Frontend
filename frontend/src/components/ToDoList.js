import React, { Component } from 'react'
import axios from 'axios';
import AddToDo from './AddToDo';
import EditToDo from './EditToDo';
import DeleteToDo from './DeleteToDo';
export default class ToDOList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         list: [],
      }
    }
    componentDidMount(){
        this.getList();
    }
    getList = async () => {
        const API = `${process.env.REACT_APP_SERVER}/todo`;
        let res = await axios.get(API);
        this.setState({
            list: res.data
        })
        console.log(res.data)
    }
    addNewToDo = (newToDo) => {
      this.setState({list: [...this.state.list, newToDo]});
    }
  render() {
    return (
      <div className='container2'>
        <AddToDo addNewToDo={this.addNewToDo}/>
        {this.state.list.map((todo) =>(
            <ul key={todo.id}>
              <li >{todo.ToDo}</li>
              <div className="buttons">
              <EditToDo todoId={todo._id} getList={this.getList}/>
              <DeleteToDo todoId={todo._id} getList={this.getList}/>
              </div>
            </ul>
            
        ))}
        
      </div>
    )
  }
}

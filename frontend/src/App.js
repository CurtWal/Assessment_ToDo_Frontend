import React, { Component } from 'react'
import ToDoList from './components/ToDoList'
import Footer from './components/Footer'
export default class App extends Component {
  render() {
    return (
      <div className="title">
        <h1 style={{fontSize: '55px'}}>todo<b>List</b></h1>
        <p style={{fontSize: "12px"}}>A MERN (MongoDB + Express.js + React.js + Node.js) Stack Todo-List App</p>
        <div className='List'>
        <ToDoList/>
        </div>
      <Footer/>
      </div>
    )
  }
}


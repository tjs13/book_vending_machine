import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class VendingMachine extends Component {
  render() {
    return (
      <div className='VendingMachine'>
        <p>Pick a book!</p>
        <ul>
          <Link to="/nonfiction">Nonfiction</Link>
          <Link to="/fiction">Fiction</Link>
          <Link to="/sci-fi">Sci-Fi</Link>
        </ul>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './search-box.styles.css'


export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input type= 'search' 
        className={`search-box ${this.props.className}`}
        // placeholder='Search Monster'
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
        />
      </div>
    )
  }
}

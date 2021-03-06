import React, { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
export default class App extends Component {

  constructor() {
    super();

    
    this.state = {
      monsters: [],
      //the way I put  searchField in the state
      //is because  it will become accessible
      //to all the components 
      searchField: ''
    }
  }

  //Fetching the data from eternal API
  componentDidMount() {
    //fetch the data from the api
    fetch('https://jsonplaceholder.typicode.com/users')
    //turn the data to json()
    .then((response) => response.json())
    //Now json will return aback data so I name
    //the return data to users and put it in the 
    //monster functions 
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
  }

  //This is a method
   onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    //Because I used a variable as only field
    //I can remove the filteredMonster 
    //in the setState object

    this.setState(() => {
      return {searchField}
  })
    //Thus I have removed the filteredMonster
    //making it only "searchField"
    
  }



  

  render() {

    //optimizing the code
    // const [monsters, searchField ] = this.state;

    const { monsters, searchField } = this.state
    const {onSearchChange} = this;


    //This is the new array - the modified version
        //of our original array
        const filteredMonster = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField)

        });


    return (
      <div className='App' >

        <h1 className='app-title' > Calvin Monsters </h1>
      
        <SearchBox onChangeHandler={onSearchChange}
        placeholder='Search Monster'
        className='monsters-search-box'
        />
        <CardList  monsters={filteredMonster} />


      </div>
    )
  }
}

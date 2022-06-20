import React, { Component } from 'react'
import Card from '../card/card.component';
import './card-list.styles.css'


export default class CardList extends Component {
  render() {

    //destructuring
    const { monsters } = this.props;


return (
    <div className='card-list' >
    {
        monsters.map((monster) => {
        //destructing monster.id, monster.name
        //monster. etc 

   

    return(
        <Card monster={monster} />
    )
    
  
  
  })}
      </div>
    )
  }
}

import React, { Component } from 'react';
import CardName from './components/CardName';
import CardAddress from './components/CardAddress';
import CardTitle from './components/CardTitle';
import './styles/App.css';

class App extends Component {
  render (){
    const cardsData = [
      {
        'name': 'John',
        'surname': 'Doe',
        'street': 'Queen Elizabeth',
        'city': 'London',
        'title': 'Smith'
      },
      {
        'name': 'Cersei',
        'surname': 'of the House Lannister',
        'street': 'Kings Landing',
        'city': 'South',
        'title': 'First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms.'
      },
      {
        'name': 'Jon',
        'surname': 'Snow',
        'street': 'Winterfell',
        'city': 'North',
        'title': 'King in the North'
      },
      {
        'name': 'Daenerys',
        'surname': 'Stormborn of the House Targaryen',
        'street': 'Dragon Stone',
        'city': 'South',
        'title': 'First of Her Name, Queen of the Andals, the Rhoynar and the First Men, Lady of the Seven Kingdoms and Protector of the Realm, Lady of Dragonstone, Queen of Meereen, Khaleesi of the Great Grass Sea, the Unburnt, Breaker of Chains and Mother of Dragons.'
      }
    ];
    const cards = cardsData.map((person, index) => {
      return (
          <div className='card-content' key={index}>
            <div className='personal-data'>
              <CardName person={person}/>
              <CardAddress person={person}/>
            </div>
            <CardTitle title={person.title}/>
          </div>
      )
    });
    return (
        <div className="App">
          {cards}
        </div>
    )}
}

export default App;

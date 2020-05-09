import React, {Component} from 'react';
import './App.css';
import Pokemons from './components/Pokemons';
import Header from './components/Header'
import AddPokemon from './components/AddPokemon';
var idCounter = 4;

class App extends Component {
  state = {
    pokemons: [
      {
        id: 1,
        name: 'Bulbasaur',
        addedLast: false
      },
      {
        id: '2',
        name: 'Charmander',
        addedLast: false
      },
      {
        id: '3',
        name: 'Squirtle',
        addedLast: true
      }
    ]
  }

  addPokemon = (name) => {
    const newPokemon = {
      id: idCounter,
      name: name,
      addedLast: true
    }
    this.setState({pokemons: this.state.pokemons.map((p)=>{return p.addedLast = false})})
    this.setState({pokemons: [...this.state.pokemons, newPokemon]})
    idCounter++;
  }

  removePokemon = (id) => {
    this.setState({pokemons: this.state.pokemons.filter(
        p=>p.id!==id)
      }
    )
  }

  render() {
    this.state.pokemons.sort((a, b)=>{
      if(a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    return (
      <div className="App">
        <Header />
        <AddPokemon addPokemon={this.addPokemon}/>
        <Pokemons pokemons={this.state.pokemons} removePokemon={this.removePokemon}/>
      </div>
    );
  }
}

export default App;

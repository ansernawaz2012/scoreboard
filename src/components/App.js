import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
// import Icon from './icon';


  


class App extends Component {
  state = {
    players: [
      {
        name: "le",
        score:0,
        id: 1
      },
      {
        name: "stuart",
        score:0,
        id: 2
      },
      {
        name: "dan",
        score:0,
        id: 3
      },
      {
        name: "dean",
        score:0,
        id: 4
      }
    ]
  };

  prevPlayerId = 4;

  getHighestScore = () => {
    let scoreArray = [];
    this.state.players.map( (player) =>
      {
      scoreArray.push(player.score);
    }
    )
    // console.log(scoreArray);
    // console.log(Math.max.apply(null, scoreArray));
    // console.log(scoreArray.indexOf(Math.max.apply(null, scoreArray)));
    let highscoreIndex = scoreArray.indexOf(Math.max.apply(null, scoreArray));

    // scoreArray = scoreArray.splice(highscoreIndex, 1);
    // let uniqueHighScore = scoreArray.includes(highscoreIndex);
    // if (uniqueHighScore) {
    //     return null;
    // } else {

    return highscoreIndex;
    // }
  }

  handleScoreChange= (index, delta) => {
      this.setState( prevState => ({
        score: prevState.players[index].score+=delta
      })
      );
      this.getHighestScore();
    }

    handleAddPlayer = (name) => {
      console.log(...this.state.players);
      
      this.setState( prevState =>{
        return {
        players:[
          ...prevState.players,
          // ...this.state.players,
          {
            name, 
            score:0,
            id: this.prevPlayerId += 1
          }
                    // ...this.state.players,

        ]
      }
      })
    }


    

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players = {this.state.players}
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          
          <Player 
            name={player.name}
            score = {player.score}
            id={player.id}
            key={player.id.toString()} 
            index = {index}
            changeScore = {this.handleScoreChange}
            removePlayer={this.handleRemovePlayer} 
            players = {this.state.players}
            leaderID = {this.getHighestScore()}
          
          />
        )}
        
        <AddPlayerForm addPlayer = {this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;

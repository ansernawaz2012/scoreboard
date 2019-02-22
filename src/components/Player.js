import React, {PureComponent} from 'react';
import Counter from './Counter';
import Icon from './icon';

class Player extends PureComponent  {
  render () {

  // console.log(this.props.name + 'rendered');
  
  return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          <button className="remove-player" onClick={() => this.props.leaderID()}>Y</button>

          <Icon  
                  
                  index = {this.props.index}                 
                  leader = {this.props.leaderID} />
          { this.props.name }
        </span>
  
        <Counter score = {this.props.score}
                  index = {this.props.index}
                  changeScore = {this.props.changeScore}
                  
         />
      </div>
    );
  }
}
export default Player;
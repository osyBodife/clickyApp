import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriendIds: [],
    TopScore: 0,
    Score: 0,
    Message: "",
   
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  handleArrayShuffle = () => {    
    const newfriends = this.state.friends.sort(() => Math.random() - 0.5);
    this.setState({ newfriends });
  };

  handleClicky = () => {


    if (this.state.CardValue === 1) {      
      this.setState({
        TopScore: this.state.TopScore + 1,
        Score: this.state.Score + 1,        
        clickedFriendIds: this.state.clickedFriendIds.push(this.friend.Id)
      
      });
    } else {
      this.setState({
        Score: (this.state.Score - this.state.Score),
        CardValue: (this.state.CardValue + 1)
      });
    }
    this.handleArrayShuffle();
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>
          <ul>
            <li>Clicky Game</li>

            <li>Click on image to begin</li>
            <li>
              Score:{this.state.Score} | Top Score :{this.state.TopScore}
            </li>
          </ul>
        </Header>
       
        {this.state.friends.map(friend => (                   
          <button onClick={this.handleClicky} >
          <FriendCard
           
            id={friend.id}
            key={friend.id}  
            image={friend.image}
            
          />
          </button>
        ))}
       
      </Wrapper>
    );
  }
}

export default App;

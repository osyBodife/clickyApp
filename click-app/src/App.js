import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  // constructor(props) {
  //   super(props);
  state = {
    friends,
    FriendIds: [],
    TopScore: 0,
    Score: 0,
    Message: ""
  };


  handleArrayShuffle = () => {
    const newfriends = this.state.friends.sort(() => Math.random() - 0.5);
    this.setState({ newfriends });
  };
  //make a winning function
  checkWinning = () => {    
    if (this.state.FriendIds.length === 12) {
      this.setState({
        Message: "You have have won. Click to play again!",
        FriendIds:[]
      });
    }
  };

  handleClick = (clickedId)=> {
    //console.log(clickedId);
     //check if friends Id has being clicked against array containing Ids   
    let IdExists = this.state.FriendIds.includes(clickedId);    
      if(IdExists === true){
      //if ((clickedFriends.indexOf(clicked_id) > -1) === true){
      this.setState({
        //if the id exists, which means the image has been clicked
        //empty the array
        //reset Score to zero
        //send a message player that s/he guessed incorrectly
        FriendIds: [],
        Score: this.state.Score - this.state.Score,
        Message: "You guessed incorrectly.Click to play again!"
      });
    } else {
      this.setState({
        TopScore: this.state.TopScore + 1,
        Score: this.state.Score + 1,
        Message: "You guessed correctly.!",
        FriendIds: this.state.FriendIds.push(clickedId)
      });
      this.checkWinning();
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
            <li>{this.state.Message}</li>
            <li>
              Score:{this.state.Score} | Top Score :{this.state.TopScore}
            </li>
          </ul>
        </Header>

        {this.state.friends.map(friend => (
          <button onClick={() => this.handleClick(friend.id)}>
            <>
              <FriendCard
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
              />
            </>
          </button>
        ))}
      </Wrapper>
    );
  }
}

export default App;

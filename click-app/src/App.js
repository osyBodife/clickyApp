import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    FriendIds: [],
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
//make function
checkWinning = () =>{
  if(this.state.Score === this.state.TopScore){
    this.setState({     
      Message: "You have have won. Click to play again!"
    }); 
    
  }
}
 
  handleClick = function(clicked_id){
   //console.log(clicked_id);
    let clickedFriends = this.state.FriendIds;
  if(clickedFriends.includes(clicked_id)===true){
    //if ((clickedFriends.indexOf(clicked_id) > -1) === true){
     this.setState({
       Score: this.state.Score - this.state.Score,
       Message: "You guessed incorrectly. Click to play again!"
     });    

   }else{
     this.setState({
       TopScore: this.state.TopScore + 1,
       Score: this.state.Score + 1,
       Message: "You guessed correctly.!",
       FriendIds:this.state.FriendIds.push(clicked_id)
       
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
         
          <button onClick={() => this.handleClick(friend.id)} >
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

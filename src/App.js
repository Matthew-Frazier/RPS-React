import React from 'react';
import OptionBox from './components/OptionBox';
import Outcome from './components/Outcome';
import Scoreboard from './components/Scoreboard';
import { Container, Header, Grid, Divider, Segment, } from 'semantic-ui-react';

class App extends React.Component {
  state = { 
    userChoice: null, 
    compChoice: null, 
    userScore: 0, 
    compScore: 0,
  };

  logic = () => {
    const rules = {
      "Rock": "Scissors",
      "Paper": "Rock",
      "Scissors": "Paper"
    }
    const {userChoice, compChoice} = this.state
    if (userChoice === compChoice) {
      this.setState({outcome: "Tie"})
    } else if (compChoice === rules[userChoice]) {
      this.setState({outcome: "Win", userScore: (this.state.userScore + 1) })
    } else {
      this.setState({outcome: "Lose", compScore: (this.state.compScore + 1) })
    }
  }

  optionClick = (option) => {
    this.setState(state => {
      return { userChoice: option, compChoice: this.randomChoice() }}, () => {
        this.logic()
      })
  }

  randomChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors']; 
    return choices[Math.floor(Math.random() * choices.length)]; 
  }

  componentDidMount() {

  }

  render() {
    return(
      <Container textAlign="center" style={{marginTop: "15px", letterSpacing: "2px",}}>
        <Header textAlign="center" size="huge">Rock Paper Scissors</Header>
        <Divider/>
        <Scoreboard userScore={this.state.userScore} compScore={this.state.compScore}/>
        <Grid columns="equal">
          <OptionBox optionClick={this.optionClick}/>
        </Grid>
          {this.state.outcome && <Outcome values={this.state}/>}
      </Container>
    );
  };
};

export default App;

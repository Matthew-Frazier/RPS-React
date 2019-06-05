import React from 'react';
import OptionBox from './components/OptionBox'
import { Container, Header, Grid, Divider, } from 'semantic-ui-react';

class App extends React.Component {
  state = { 
    userChoice: null, 
    compChoice: null, 
    userScore: 0, 
    compScore: 0 
  };

  optionClick = (option) => {
    this.setState({ userChoice: option, compChoice: this.randomChoice() })
  }

  randomChoice = () => {
    const choices = ['rock', 'paper', 'scissors']; 
    return choices[Math.floor(Math.random() * choices.length)]; 
  }

  render() {
    return(
      <Container style={{marginTop: "15px", letterSpacing: "2px",}}>
        <Header textAlign="center" size="huge">Rock Paper Scissors</Header>
        <Divider/>
        <Grid columns="equal">
          <OptionBox optionClick={this.optionClick}/>
        </Grid>
      </Container>
    );
  };
};

export default App;

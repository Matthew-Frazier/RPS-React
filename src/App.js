import React from 'react';
import OptionBox from './components/OptionBox'
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissors from './images/scissors.png'
import { Container, Header, Grid, } from 'semantic-ui-react';

class App extends React.Component {
  state = { userChoice: null, compChoice: null, };

  optionClick = (option) => {
    debugger
  }

  render() {
    return(
      <Container style={{ marginTop: "25px", }} textAlign="center">
        <Header as="h1">Rock, Paper, Scissors</Header>
        <Header as="h1">React</Header>
        <hr/>
        <Grid>
          <Grid.Row columns={3} centered>
            <Grid.Column>
              <OptionBox name="rock" img={rock} optionClick={this.optionClick} />
            </Grid.Column>

            <Grid.Column>
              <OptionBox name="paper" img={paper} optionClick={this.optionClick} />
            </Grid.Column>

            <Grid.Column>
              <OptionBox name="scissors" img={scissors} optionClick={this.optionClick} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  };
};

export default App;

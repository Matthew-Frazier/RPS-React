import React from 'react';
import { Segment, Header, } from 'semantic-ui-react';

class Outcome extends React.Component {
  state = { 
    outcome: null, 
    color: null,
  };

  renderColor = () => {
    if (this.state.outcome === "Win") {
      this.setState({color: "green"})
    } else if (this.state.outcome === "Lose") {
      this.setState({color: "red"})
    } else {
      this.setState({color: "yellow"})
    }
  }

  render() {
    return(
      <Segment color={this.state.color}>
        <Header>The Computer Picked {this.props.values.compChoice}</Header>
        <Header>You Picked {this.props.values.userChoice}</Header>
        <Header>You {this.props.values.outcome}</Header>
      </Segment>
    )
  }
}

export default Outcome;
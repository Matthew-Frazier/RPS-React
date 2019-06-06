import React from 'react';
import rock from '../images/rock.png'
import paper from '../images/paper.png'
import scissors from '../images/scissors.png'
import { Image, Segment, Grid, } from 'semantic-ui-react';

const OptionBox = (props) => (
  <React.Fragment>
        <Grid.Column>
          <Segment circular style={{border: "solid 5px purple" }}>
          <Image size="small" name="rock" src={rock} onClick={() => props.optionClick("Rock")}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment circular style={{border: "solid 5px purple" }}>
          <Image size="small" name="paper" src={paper} onClick={() => props.optionClick('Paper')}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment circular style={{border: "solid 5px purple" }}>
          <Image size="small" name="scissors" src={scissors} onClick={() => props.optionClick('Scissors')}/>
          </Segment>
        </Grid.Column>
    </React.Fragment>
);

export default OptionBox;
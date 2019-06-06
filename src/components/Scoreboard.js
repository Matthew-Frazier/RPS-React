import React, { Fragment, Component } from 'react'
import {Segment, Grid, Divider, Header, } from 'semantic-ui-react'

const Scoreboard = ({ userScore, compScore}) => {
  return (
    <Fragment>
      <Segment>
      <Grid columns={2} textAlign='center'>
        <Divider vertical> : </Divider>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Header>
              USER: {userScore}
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header>
              COMP: {compScore}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </Fragment>
  )
}

export default Scoreboard; 
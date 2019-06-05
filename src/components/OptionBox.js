import React from 'react';
import { Image, Segment, } from 'semantic-ui-react';

const OptionBox = (props) => (
  <Segment circular style={{ padding: "45px", borderColor: "blue", borderWidth: "5px", }}>
    <Image 
    src={props.img} 
    onClick={ () => props.optionClick(props.name)} 
    size="small"
    />
  </Segment>
);

export default OptionBox;
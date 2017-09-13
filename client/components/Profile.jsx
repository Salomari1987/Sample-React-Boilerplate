import React from 'react';
import {Item, Icon} from 'semantic-ui-react';


export default ({...props}) => {

  return (
    <Item.Group relaxed={true}>
      <Item>
        <Item.Image size='small' src={props.user.avatar}/>
        <Item.Content verticalAlign='middle'>
          <Item.Header>{props.user.first_name}</Item.Header>
          <Item.Meta>Details</Item.Meta>
          <Item.Description>
            <div>
              <span><Icon name='mail outline'/></span>
              <span>{props.user.last_name}</span>
            </div>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

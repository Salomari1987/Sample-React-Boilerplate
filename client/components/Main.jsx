import React from 'react';
import { Grid, Icon, Divider } from 'semantic-ui-react';
import Profile from 'components/Profile';
import Loading from 'components/Loading';

export default ({...props}) => {
  return props.user ? (
    <Grid divided={true} centered={true} textAlign="justified" relaxed={true}>
      <Grid.Row>
        <Grid.Column width={6}>
          <Profile user={props.user}/>
        </Grid.Column>
      </Grid.Row>
      <Divider />
    </Grid> ) :
    (<Loading />);
};

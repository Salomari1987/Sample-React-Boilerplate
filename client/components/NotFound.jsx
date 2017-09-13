import React from 'react';
import {Grid, Icon, Header} from 'semantic-ui-react';

export default ({...props}) => (
  <Grid textAlign="center">
    <Grid.Row>
      <Header color="red" as="h1"><Icon name="remove" color="red"></Icon>404</Header>
    </Grid.Row>
    <Grid.Row>
      <div>
        <p>The page you are looking for is Not Found</p>
      </div>
    </Grid.Row>
  </Grid>
);


import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';

export default ({...props}) => (
  <Grid centered={true}>
    <Icon loading={true} name='spinner' size="huge"/>
    <h4> Loading ... </h4>
  </Grid>
);



import React from 'react';
import { Route } from 'react-router';

import Auth from './containers/Auth';

export default (<Route path="/auth-3" getComponents={(nextState, cb) => {
  cb(null, Auth);
}} />);

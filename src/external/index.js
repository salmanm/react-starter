import React from 'react';
import { Route } from 'react-router';

import Auth from './component/Auth';

export let component = Auth;

export default (<Route path="/auth" getComponents={(nextState, cb) => {
  cb(null, Auth);
}} />);

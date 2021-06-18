import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Calculator from '../pages/Calculator/Calculator';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Calculator} />
    </BrowserRouter>
  );
}
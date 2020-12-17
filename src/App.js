import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import StudentData from './Pages/StudentData';
import GeneratePage from './Pages/GeneratePage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact strict path="/" component={StudentData}/>
        <Route exact strict path="/start-test" component={GeneratePage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

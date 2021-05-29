import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StudentData from './Pages/StudentData';
import GeneratePage from './Pages/GeneratePage[deperecated]';
import BeginnerPage from './Pages/BeginnerPage';
import NativePage from './Pages/NativePage';
import FinishPage from './Pages/FinishPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact strict path="/" component={StudentData}/>
        {/* to change generate page */}
        <Route exact strict path="/start-test" component={GeneratePage}/>
        <Route exact strict path="/beginner-page" component={BeginnerPage}/>
        <Route exact strict path="/native-page" component={NativePage}/>
        <Route exact strict path="/finish" component={FinishPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

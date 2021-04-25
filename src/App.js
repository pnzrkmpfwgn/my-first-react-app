import React from 'react';
import Aux from './hoc/Auxiliary/Auxiliary'
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './components/Welcome-Page/Welcome-Page';
import MainPage from './components/Main-Page/MainPage';
import AboutMe from './components/About-Me/AboutMe';
import './App.css';


const App = () => {
  return (
    <Aux>
      <div className="App">

        <Switch >
          <Route path="/" exact component={WelcomePage} />
          <Route path="/Main-page" component={MainPage} />
          <Route path="/About-me" component={AboutMe} />
          <Route path="/" render={() => <div>404 not found</div>} />
        </Switch>

      </div>
    </Aux>
  );
}

export default App;

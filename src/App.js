import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
// component imports
import LoginView from './components/LoginView/LoginView';
import RegisterView from './components/RegisterView/RegisterView';
import DashView from './components/DashView/DashView';
import PlantDataView from './components/PlantDataView/PlantDataView';
import ControlView from './components/ControlView/ControlView';
import PlantRegistrationView from './components/PlantRegistrationView/PlantRegistrationView';
// css
import './styles/main.css';



class App extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
  }

  render() {
    return (
      <div>
          <Router>
            <Switch>
              <Redirect exact from="/" to="/login" />
              <Route
                path="/login"
                component={LoginView}
              />
              <Route
                path="/register"
                component={RegisterView}
              />
              <Route
                path="/dash"
                component={DashView}
              />
              <Route
                path="/controls"
                component={ControlView}
              />
              <Route
                path="/plant-data"
                component={PlantDataView}
              />
              <Route
                path="/register-plant"
                component={PlantRegistrationView}
              />
              {/* OTHERWISE (no path!) */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </Router>
      </div>
    )
  }
}

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NekoMain from './components/NekoMain';
import NekoDashboard from './components/NekoDashboard';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/">
              <NekoMain />
            </Route>
            <Route path="/neko-dashboard">
              <NekoDashboard />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NekoMain from './components/home/NekoMain';
import NekoDashboard from './components/dashboard/NekoDashboard';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/neko-dashboard">
              <NekoDashboard />
            </Route>
            <Route path="/">
              <NekoMain />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

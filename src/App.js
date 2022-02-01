import './App.css';
import Home from './views/Home/Home.jsx';
import Header from './components/Header/Header';
import DetailsPage from './views/DetailsPage/DetailsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/artwork/:id">
            <DetailsPage></DetailsPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

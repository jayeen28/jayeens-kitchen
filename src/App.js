import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import "./index.css";
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import SingleFood from './Pages/Foods/SingleFood/SingleFood';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/foods/:foodId'>
              <SingleFood />
            </Route>
            <Route path='/signin'>
              <Signin />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='*'>
              <ErrorPage />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

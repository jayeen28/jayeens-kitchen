import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import "./index.css";
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Home></Home>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

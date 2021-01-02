import './App.css';
import Sidebar from './components/Sidebar'
//import Content from './components/Content'
import {Switch, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
      <Sidebar> 
      </Sidebar>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/about" exact component={About}/>
        </Switch>
    </>
  );
}

export default App;

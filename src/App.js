import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './pages/Home';
import Validate from './components/Validate';







function App() {
  return (
    <Router>
     <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/validate" component={Validate} />
        
        
      </Switch>
      <Footer />
      
    
     
    </Router>
  );
}

export default App;

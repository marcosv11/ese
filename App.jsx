import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cnpj from './pages/Cnpj';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Cpf from './pages/Cpf';


function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/cpf' exact component={Cpf} />
          <Route path='/cnpj' component={Cnpj} />
          <Route path='/tela2' component={Reports} />
          <Route path='*' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
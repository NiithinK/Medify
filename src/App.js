// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './pages/Home';
import SearchResultsPage from './pages/SearchResultPage';
import MyBookingsPage from './pages/MyBookingsPage';
import FindPage from './Components/FindDoctar';
import './App.css'
const App = () => (
  <Router>
    <div>
    <div className='hero-Back'>
        <div className="navTab" style={{margin: 'none',background: '#2AA7FF' ,padding: ' 5px 0 5px 0' ,color:'black',width:'100%'}}>
           <p style={{textAlign:'center',color:'white',fontWeight:'400',fontSize:'14px',fontFamily:"Poppins"}}>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
      </div>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/find" exact component={FindPage} />
      <Route path="/search-results" component={SearchResultsPage} />
      <Route path="/my-bookings" component={MyBookingsPage} />
    </Switch>
    </div>
    </div>
  </Router>
);

export default App;
